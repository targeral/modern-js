import { isObject, createDebugger } from '@modern-js/utils';
import { cloneDeep } from '@modern-js/utils/lodash';
import type { JSONSchemaType } from '@modern-js/utils/ajv';

const debug = createDebugger('validate-schema');

export interface PluginValidateSchema {
  target: string;
  schema: JSONSchemaType<any>;
}

export const patchSchema = (
  pluginSchemas: Array<PluginValidateSchema | PluginValidateSchema[]>,
) => {
  const finalSchema = cloneDeep({
    type: 'object',
    additionalProperties: false,
    properties: {} as Record<string, unknown>,
  });

  const finalPluginSchemas: PluginValidateSchema[] = [];
  pluginSchemas.forEach(item => {
    if (Array.isArray(item)) {
      finalPluginSchemas.push(...item);
    } else {
      finalPluginSchemas.push(item);
    }
  });

  const findTargetNode = (props: string[]) => {
    let node = finalSchema.properties;

    for (const prop of props) {
      const crtNode = node[prop];
      if (!crtNode || !isObject(crtNode)) {
        throw new Error(`add schema ${props.join('.')} error`);
      }
      crtNode.properties = crtNode.hasOwnProperty('properties')
        ? crtNode.properties
        : {};

      node = crtNode.properties;
    }
    return node;
  };

  for (const { target, schema } of finalPluginSchemas) {
    if (!target) {
      throw new Error(`should return target property in plugin schema.`);
    }
    const props = target.split('.');

    const mountProperty = props.pop();

    const targetNode = findTargetNode(props);

    if (!targetNode.hasOwnProperty(mountProperty!)) {
      targetNode[mountProperty as string] = cloneDeep(schema);
    }
  }

  debug(`final validate schema: %o`, finalSchema);

  return finalSchema;
};

export const traverseSchema = (schema: ReturnType<typeof patchSchema>) => {
  const keys: string[] = [];

  const traverse = (
    { properties }: { properties: any },
    old: string[] = [],
  ) => {
    for (const key of Object.keys(properties)) {
      const current = [...old, key];
      if (properties[key].type === 'object' && properties[key].properties) {
        traverse(properties[key], current);
      } else {
        keys.push(current.join('.'));
      }
    }
  };

  traverse(schema);

  return keys;
};

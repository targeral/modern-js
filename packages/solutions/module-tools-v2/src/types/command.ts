export interface DevCommandOptions {
  port?: string;
}

export interface BuildCommandOptions {
  config: string;
  clear?: boolean;
  dts?: boolean;
  platform?: boolean | string | string[];
  tsconfig: string;
  watch?: boolean;
}

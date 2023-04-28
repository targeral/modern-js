import type { FindAction } from './config';

const getProjectPathList = (): string[] => {
  console.info('not found action.get');
  return [];
};

const filterProjectPathList = (p: string[]) => p;

class Project {
  name: string;

  constructor(path: string) {
    this.name = path;
  }
}

const projectFactory = (p: string) => {
  return new Project(p);
};

const transformPathsToProjects = (paths: string[]) => {
  const projects = [];
  for (const p of paths) {
    projects.push(projectFactory(p));
  }

  return projects;
};

const useProjectsCallback = (projects: Project[]) => {
  projects.forEach(p => console.info(p.name));
};

export const find = async (
  action: FindAction,
  options: {
    startPath: string;
  },
) => {
  const { startPath = process.cwd() } = options ?? {};
  const projectPathList = await (action.get ?? getProjectPathList)({
    startPath,
  });
  const filteredProjectPathList = (action.filter ?? filterProjectPathList)(
    projectPathList,
  );
  const projects = (action.struct ?? transformPathsToProjects)(
    filteredProjectPathList,
  );

  // useProjectsCallback(projects);
  return projects;
};

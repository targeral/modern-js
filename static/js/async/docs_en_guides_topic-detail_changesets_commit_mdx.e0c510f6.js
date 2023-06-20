(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_changesets_commit_mdx"],{545:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return a},title:function(){return o},toc:function(){return r},default:function(){return d}});var s=t("9880"),i=t("23169"),a={sidebar_position:7},o="Customizing Commit Messages",r=[{text:"Customizing Commit Message Content",depth:2,id:"customizing-commit-message-content"},{text:"getAddMessage",depth:3,id:"getaddmessage"},{text:"Params",depth:4,id:"params"},{text:"Returns",depth:4,id:"returns"},{text:"Default Implementation",depth:4,id:"default-implementation"},{text:"getVersionMessage",depth:3,id:"getversionmessage"},{text:"Params",depth:4,id:"params-1"},{text:"Returns",depth:4,id:"returns-1"},{text:"Default Implementation",depth:4,id:"default-implementation-1"},{text:"Configuration",depth:2,id:"configuration"},{text:"Configuring Relative Paths",depth:3,id:"configuring-relative-paths"},{text:"Using NPM Module",depth:3,id:"using-npm-module"},{text:"Use npx @modern-js/create@latest to create a module project",depth:4,id:"use-npx-@modern-js/create@latest-to-create-a-module-project"},{text:"Implement Custom Content",depth:4,id:"implement-custom-content"},{text:"Publish the module to NPM",depth:4,id:"publish-the-module-to-npm"},{text:"Install the corresponding module in the root directory of the target repository, such as custom-commit",depth:4,id:"install-the-corresponding-module-in-the-root-directory-of-the-target-repository,-such-as-custom-commit"},{text:"Configure the commit configuration of changesets as the package name",depth:4,id:"configure-the-commit-configuration-of-changesets-as-the-package-name"},{text:"Using Monorepo Sub-Project",depth:3,id:"using-monorepo-sub-project"},{text:"Run pnpm run new to create a module sub-project",depth:4,id:"run-pnpm-run-new-to-create-a-module-sub-project"},{text:"Implement Custom Content",depth:4,id:"implement-custom-content-1"},{text:"Add the sub-project module dependency, such as custom-commit, to the Monorepo root directory",depth:4,id:"add-the-sub-project-module-dependency,-such-as-custom-commit,-to-the-monorepo-root-directory"},{text:"Configure the commit configuration of Changesets as the package name",depth:4,id:"configure-the-commit-configuration-of-changesets-as-the-package-name-1"}];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",img:"img",h2:"h2",ul:"ul",li:"li",h3:"h3",h4:"h4",pre:"pre",blockquote:"blockquote"},(0,i.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"customizing-commit-messages",children:["Customizing Commit Messages",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customizing-commit-messages",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Changesets supports configuring ",(0,s.jsx)(n.code,{children:"commit"})," to automatically submit the current changes when running the ",(0,s.jsx)(n.code,{children:"change"})," and ",(0,s.jsx)(n.code,{children:"bump"})," commands."]}),"\n",(0,s.jsxs)(n.p,{children:["The default ",(0,s.jsx)(n.code,{children:"commit"})," information is provided by ",(0,s.jsx)(n.code,{children:"@changesets/cli/commit"}),", and the default information format is:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-change-commit-info.png",alt:"change commit"}),"\n",(0,s.jsx)(n.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-bump-commit-info.png",alt:"bump commit"})]}),"\n",(0,s.jsx)(n.p,{children:"When the default commit information cannot meet the requirements, custom commit information is supported."}),"\n",(0,s.jsxs)(n.h2,{id:"customizing-commit-message-content",children:["Customizing Commit Message Content",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#customizing-commit-message-content",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Commit information is divided into two types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Commit information automatically generated when running the ",(0,s.jsx)(n.code,{children:"change"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:["Commit information automatically generated when running the ",(0,s.jsx)(n.code,{children:"bump"})," command."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The custom logic mainly implements two functions, ",(0,s.jsx)(n.code,{children:"getAddMessage"})," and ",(0,s.jsx)(n.code,{children:"getVersionMessage"}),", which are used to define the above two types of information, respectively."]}),"\n",(0,s.jsxs)(n.h3,{id:"getaddmessage",children:["getAddMessage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getaddmessage",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"params",children:["Params",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"changeset"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The current changeset information created."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Release = {\n  name: string;\n  type: VersionType;\n};\n\ntype Changeset = {\n  summary: string;\n  releases: Array<Release>;\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"options"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Configuration information when committing."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the commit configuration is an array, the second parameter supports passing in default configuration information, which will be used to pass this parameter."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"returns",children:["Returns",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#returns",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Commit message content."}),"\n",(0,s.jsxs)(n.h4,{id:"default-implementation",children:["Default Implementation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-implementation",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The default processing logic of ",(0,s.jsx)(n.code,{children:"@changesets/cli/commit"})," is to start with ",(0,s.jsx)(n.code,{children:"docs(changeset):"}),", and the commit information is the ",(0,s.jsx)(n.code,{children:"summary"})," of the changeset, and [skip ci] information is added according to the ",(0,s.jsx)(n.code,{children:"skipCI"})," parameter configuration passed in."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type SkipCI = boolean | 'add' | 'version';\n\nconst getAddMessage = async (\n  changeset: Changeset,\n  options: { skipCI?: SkipCI } | null,\n) => {\n  const skipCI = options?.skipCI === 'add' || options?.skipCI === true;\n  return outdent`docs(changeset): ${changeset.summary}${\n    skipCI ? `\\n\\n[skip ci]\\n` : ''\n  }`;\n};\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/outdent",target:"_blank",rel:"noopener noreferrer",children:"outdent"})," is used to remove the leading whitespace content of the template string to make the commit information more compliant with the specification."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"getversionmessage",children:["getVersionMessage",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#getversionmessage",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"params-1",children:["Params",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#params-1",children:"#"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"releasePlan"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type VersionType = 'major' | 'minor' | 'patch' | 'none';\n\ntype Release = {\n  name: string;\n  type: VersionType;\n};\n\ntype Changeset = {\n  id: string;\n  summary: string;\n  releases: Array<Release>;\n};\n\ntype ComprehensiveRelease = {\n  name: string;\n  type: VersionType;\n  oldVersion: string;\n  newVersion: string;\n  changesets: string[];\n};\n\ntype PreState = {\n  mode: 'pre' | 'exit'; // Current state of pre mode\n  tag: string; // Type of pre\n  initialVersions: {\n    [pkgName: string]: string; // Package name and version information before version upgrade\n  };\n  changesets: string[]; // List of changeset ids for this upgrade\n};\n\ntype ReleasePlan = {\n  changesets: Changeset[]; // List of changesets for this upgrade\n  releases: ComprehensiveRelease[]; // Information of the current upgrade, including package name, current version, upgraded version, and upgrade type\n  preState: PreState | undefined; // If it is a pre-release, provide relevant state information\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"options"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Configuration information when committing."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"When the commit configuration is an array, the second parameter supports passing in default configuration information, which will be used to pass this parameter."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"returns-1",children:["Returns",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#returns-1",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Commit message content."}),"\n",(0,s.jsxs)(n.h4,{id:"default-implementation-1",children:["Default Implementation",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-implementation-1",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The default processing logic of ",(0,s.jsx)(n.code,{children:"@changesets/cli/commit"})," is to first display the number of packages that need to be released, then display the names and new version of the released packages, and [skip ci] information is added according to the ",(0,s.jsx)(n.code,{children:"skipCI"})," parameter configuration passed in."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const getVersionMessage = async (\n  releasePlan: ReleasePlan,\n  options: { skipCI?: SkipCI } | null,\n) => {\n  const skipCI = options?.skipCI === 'version' || options?.skipCI === true;\n  const publishableReleases = releasePlan.releases.filter(\n    release => release.type !== 'none',\n  );\n  const numPackagesReleased = publishableReleases.length;\n\n  const releasesLines = publishableReleases\n    .map(release => `  ${release.name}@${release.newVersion}`)\n    .join('\\n');\n\n  return outdent`\n    RELEASING: Releasing ${numPackagesReleased} package(s)\n\n    Releases:\n    ${releasesLines}\n    ${skipCI ? `\\n[skip ci]\\n` : ''}\n`;\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"configuration",children:["Configuration",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuration",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"commit"})," field in the changesets configuration file is used to mark whether to submit commit information when running the ",(0,s.jsx)(n.code,{children:"change"})," and ",(0,s.jsx)(n.code,{children:"bump"})," commands, and the way to obtain commit information."]}),"\n",(0,s.jsxs)(n.p,{children:["This configuration can be a ",(0,s.jsx)(n.code,{children:"boolean"}),". When it is ",(0,s.jsx)(n.code,{children:"true"}),", the default ",(0,s.jsx)(n.code,{children:"@changesets/cli/commit"})," formatting commit information will be used."]}),"\n",(0,s.jsx)(n.p,{children:"This configuration can be a string, directly declaring the module name or path of the commit information acquisition module."}),"\n",(0,s.jsxs)(n.p,{children:["This configuration also supports configuring arrays. The first element in the array is the module name or path of the commit information acquisition module, and the second element is the parameter value passed to the corresponding function, which will be passed as the second parameter of the ",(0,s.jsx)(n.code,{children:"getAddMessage"})," and ",(0,s.jsx)(n.code,{children:"getVersionMessage"})," functions."]}),"\n",(0,s.jsxs)(n.h3,{id:"configuring-relative-paths",children:["Configuring Relative Paths",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configuring-relative-paths",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["If the commit configuration is a relative path, it is a relative path under the ",(0,s.jsx)(n.code,{children:".changesets"})," directory."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, create the ",(0,s.jsx)(n.code,{children:".changeset/my-commit-config.js"})," file and define the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",meta:'title=".changeset/my-commit-config.js"',children:"async function getAddMessage(changeset, options) {}\n\nasync function getVersionMessage(releasePlan, options) {}\n\nmodule.exports = {\n  getAddMessage,\n  getVersionMessage,\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Configure ",(0,s.jsx)(n.code,{children:"commit"})," as ",(0,s.jsx)(n.code,{children:"./my-commit-config.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "changelog": "./my-commit-config.js",\n   ...\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"using-npm-module",children:["Using NPM Module",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-npm-module",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Customizing commit can also be managed using the NPM module project to provide a common solution."}),"\n",(0,s.jsxs)(n.h4,{id:"use-npx-@modern-js/create@latest-to-create-a-module-project",children:["Use ",(0,s.jsx)(n.code,{children:"npx @modern-js/create@latest"})," to create a module project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#use-npx-@modern-js/create@latest-to-create-a-module-project",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"? Please select the type of project you want to create: Npm Module\n? Please fill in the project name: custom-commit\n? Please select the programming language: TS\n? Please select the package manager: pnpm\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"implement-custom-content",children:["Implement Custom Content",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#implement-custom-content",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getAddMessage() {}\n\nexport async function getVersionMessage() {}\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"publish-the-module-to-npm",children:["Publish the module to NPM",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#publish-the-module-to-npm",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"install-the-corresponding-module-in-the-root-directory-of-the-target-repository,-such-as-custom-commit",children:["Install the corresponding module in the root directory of the target repository, such as ",(0,s.jsx)(n.code,{children:"custom-commit"}),(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#install-the-corresponding-module-in-the-root-directory-of-the-target-repository,-such-as-custom-commit",children:"#"})]}),"\n",(0,s.jsxs)(n.h4,{id:"configure-the-commit-configuration-of-changesets-as-the-package-name",children:["Configure the commit configuration of changesets as the package name",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-the-commit-configuration-of-changesets-as-the-package-name",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "commit": "custom-commit",\n   ...\n}\n'})}),"\n",(0,s.jsxs)(n.h3,{id:"using-monorepo-sub-project",children:["Using Monorepo Sub-Project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#using-monorepo-sub-project",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"If your current repository is Monorepo, you can directly manage it using NPM module sub-projects."}),"\n",(0,s.jsxs)(n.h4,{id:"run-pnpm-run-new-to-create-a-module-sub-project",children:["Run ",(0,s.jsx)(n.code,{children:"pnpm run new"})," to create a module sub-project",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#run-pnpm-run-new-to-create-a-module-sub-project",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"? Please select the type of project you want to create: Npm Module\n? Please fill in the sub-project name: custom-commit\n? Please fill in the sub-project directory name: custom-commit\n? Please select the programming language: TS\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"implement-custom-content-1",children:["Implement Custom Content",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#implement-custom-content-1",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:'title="src/index.ts"',children:"export async function getAddMessage() {}\n\nexport async function getVersionMessage() {}\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"add-the-sub-project-module-dependency,-such-as-custom-commit,-to-the-monorepo-root-directory",children:["Add the sub-project module dependency, such as ",(0,s.jsx)(n.code,{children:"custom-commit"}),", to the Monorepo root directory",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#add-the-sub-project-module-dependency,-such-as-custom-commit,-to-the-monorepo-root-directory",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "devDependencies": {\n    "custom-commit": "workspace:*",\n    ...\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.h4,{id:"configure-the-commit-configuration-of-changesets-as-the-package-name-1",children:["Configure the commit configuration of Changesets as the package name",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#configure-the-commit-configuration-of-changesets-as-the-package-name-1",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",meta:'title=".changesets/config.json"',children:'{\n  "commit": "custom-commit",\n   ...\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"After the module is published to NPM, it can still be used like a module type for other repositories."})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}}}]);
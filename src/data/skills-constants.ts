export enum SkillNames {
  JS = "js", TS = "ts", HTML = "html", CSS = "css", REACT = "react",
  VUE = "vue", NEXTJS = "nextjs", TAILWIND = "tailwind", NODEJS = "nodejs",
  EXPRESS = "express", POSTGRES = "postgres", MONGODB = "mongodb", GIT = "git",
  GITHUB = "github", PRETTIER = "prettier", NPM = "npm", FIREBASE = "firebase",
  WORDPRESS = "wordpress", LINUX = "linux", DOCKER = "docker", NGINX = "nginx",
  AWS = "aws", GCP = "gcp", VIM = "vim", VERCEL = "vercel",
}

export type Skill = { id: number; name: string; label: string; shortDescription: string; color: string; };

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]:        { id: 1,  name: "js",        label: "JavaScript",  shortDescription: "Dynamic scripting language for the web",           color: "#f0db4f" },
  [SkillNames.TS]:        { id: 2,  name: "ts",        label: "TypeScript",  shortDescription: "Typed superset of JavaScript",                     color: "#007acc" },
  [SkillNames.HTML]:      { id: 3,  name: "html",      label: "HTML",        shortDescription: "Markup language that structures the web",           color: "#e34c26" },
  [SkillNames.CSS]:       { id: 4,  name: "css",       label: "CSS",         shortDescription: "Styling language for beautiful interfaces",         color: "#563d7c" },
  [SkillNames.REACT]:     { id: 5,  name: "react",     label: "React",       shortDescription: "UI library for building component-based apps",      color: "#61dafb" },
  [SkillNames.VUE]:       { id: 6,  name: "vue",       label: "Vue",         shortDescription: "Progressive JavaScript framework",                  color: "#41b883" },
  [SkillNames.NEXTJS]:    { id: 7,  name: "nextjs",    label: "Next.js",     shortDescription: "React framework for production apps",               color: "#fff"    },
  [SkillNames.TAILWIND]:  { id: 8,  name: "tailwind",  label: "Tailwind",    shortDescription: "Utility-first CSS framework",                       color: "#38bdf8" },
  [SkillNames.NODEJS]:    { id: 9,  name: "nodejs",    label: "Node.js",     shortDescription: "JavaScript runtime for server-side development",    color: "#6cc24a" },
  [SkillNames.EXPRESS]:   { id: 10, name: "express",   label: "Express",     shortDescription: "Fast, minimalist web framework for Node",           color: "#fff"    },
  [SkillNames.POSTGRES]:  { id: 11, name: "postgres",  label: "PostgreSQL",  shortDescription: "Powerful open-source relational database",          color: "#336791" },
  [SkillNames.MONGODB]:   { id: 12, name: "mongodb",   label: "MongoDB",     shortDescription: "NoSQL document database",                           color: "#47a248" },
  [SkillNames.GIT]:       { id: 13, name: "git",       label: "Git",         shortDescription: "Distributed version control system",                color: "#f1502f" },
  [SkillNames.GITHUB]:    { id: 14, name: "github",    label: "GitHub",      shortDescription: "Platform for hosting and collaborating on code",    color: "#fff"    },
  [SkillNames.PRETTIER]:  { id: 15, name: "prettier",  label: "Prettier",    shortDescription: "Opinionated code formatter",                        color: "#f7b93a" },
  [SkillNames.NPM]:       { id: 16, name: "npm",       label: "NPM",         shortDescription: "Package manager for JavaScript",                    color: "#cb3837" },
  [SkillNames.FIREBASE]:  { id: 17, name: "firebase",  label: "Firebase",    shortDescription: "Google's app development platform",                 color: "#ffca28" },
  [SkillNames.WORDPRESS]: { id: 18, name: "wordpress", label: "WordPress",   shortDescription: "Open-source content management system",             color: "#007acc" },
  [SkillNames.LINUX]:     { id: 19, name: "linux",     label: "Linux",       shortDescription: "Open-source operating system",                      color: "#fcc624" },
  [SkillNames.DOCKER]:    { id: 20, name: "docker",    label: "Docker",      shortDescription: "Platform for containerized applications",           color: "#2496ed" },
  [SkillNames.NGINX]:     { id: 21, name: "nginx",     label: "NginX",       shortDescription: "High-performance web server and reverse proxy",     color: "#009639" },
  [SkillNames.AWS]:       { id: 22, name: "aws",       label: "AWS",         shortDescription: "Amazon's cloud computing services",                 color: "#ff9900" },
  [SkillNames.GCP]:       { id: 25, name: "gcp",       label: "Google Cloud",shortDescription: "Google's cloud computing services",                 color: "#4285f4" },
  [SkillNames.VIM]:       { id: 23, name: "vim",       label: "Vim",         shortDescription: "Highly configurable text editor",                   color: "#019733" },
  [SkillNames.VERCEL]:    { id: 24, name: "vercel",    label: "Vercel",      shortDescription: "Platform for frontend deployment",                  color: "#fff"    },
};

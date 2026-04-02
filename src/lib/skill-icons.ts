/**
 * Map skill names to icon URLs (Simple Icons / Devicon CDN).
 * null = use letter fallback in UI.
 */
const SI = "https://cdn.simpleicons.org";
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skillIconMap: Record<string, string | null> = {
  JavaScript: `${SI}/javascript`,
  TypeScript: `${SI}/typescript`,
  Python: `${SI}/python`,
  Java: `${DEVICON}/java/java-original.svg`,
  "C/C++": `${DEVICON}/cplusplus/cplusplus-original.svg`,
  "HTML/CSS": `${SI}/html5`,
  "React.js": `${SI}/react`,
  "Node.js": `${SI}/nodedotjs`,
  "Express.js": `${SI}/express/E0E0E0`,
  "REST APIs": `${SI}/swagger`,
  TensorFlow: `${SI}/tensorflow`,
  Keras: `${SI}/keras`,
  LangChain: "/images/skills/langchain-icon.png",
  CrewAI: "/images/skills/crewai-icon.png",
  PostgreSQL: `${SI}/postgresql`,
  MongoDB: `${SI}/mongodb`,
  MySQL: `${SI}/mysql`,
  AWS: "/images/skills/aws.png",
  Docker: `${SI}/docker`,
  Git: `${SI}/git`,
  n8n: "/images/skills/n8n-icon.png",
};

export function getSkillIcon(skillName: string): string | null {
  return skillIconMap[skillName] ?? null;
}

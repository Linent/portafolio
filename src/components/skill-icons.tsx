import { Icon } from "@iconify/react";
import {
  Code,
} from "lucide-react";

export const SkillIcons = {
  node: () => <Icon icon="logos:nodejs-icon" width="20" height="20" />,
  express: () => <Icon icon="simple-icons:express" width="20" height="20" />,
  mongo: () => <Icon icon="logos:mongodb-icon" width="20" height="20" />,
  rest: () => <Code size={18} />,
  whatsapp: () => <Icon icon="logos:whatsapp-icon" width="20" height="20" />,
  gemini: () => <Icon icon="logos:google-gemini" width="20" height="20" />,
  n8n: () => <Icon icon="logos:n8n" width="20" height="20" />,
  javascript: () => <Icon icon="logos:javascript" width="20" height="20" />,
  react: () => <Icon icon="logos:react" width="20" height="20" />,
  next: () => <Icon icon="logos:nextjs-icon" width="20" height="20" />,
  html: () => <Icon icon="logos:html-5" width="20" height="20" />,
  css: () => <Icon icon="logos:css-3" width="20" height="20" />,
  wordpress: () => <Icon icon="logos:wordpress-icon" width="20" height="20" />,
  seo: () => <TrendingUpIcon />,
  git: () => <Icon icon="mdi:git" width="20" height="20" />,
  figma: () => <Icon icon="logos:figma" width="20" height="20" />,
  github: () => <Icon icon="mdi:github" width="20" height="20" />,
};

// Extra icon (lucide)
export const TrendingUpIcon = () => <svg width="20" height="20" viewBox="0 0 24 24">
  <path
    fill="currentColor"
    d="M3 17l6-6 4 4 8-8v5h2V3h-9v2h5l-6 6-4-4-7 7z"
  />
</svg>

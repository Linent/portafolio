import { SkillIcons } from "@/components/skill-icons";
import {
  Server,
  Workflow,
  MessagesSquare,
  Globe,
  TrendingUp,
  Wrench,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon?:  React.ComponentType<{ className?: string }>;
}

export interface Project {
  id: string;
  name: string;
  short: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
}

export const profile = {
  name: "Anderson Eduardo Ochoa Peñaranda",
  role: "Backend Developer",
  description:
    "Desarrollador backend con experiencia en Node.js, Express y MongoDB, especializado en la creación de APIs REST, automatización con n8n e integración de chatbots para WhatsApp con IA. También cuento con experiencia en WordPress, SEO y administración de hosting.",
  email: "ochoaanderson102@gmail.com",
  phone: "+57 301 379 9160",
};

// -------------------- SERVICES --------------------

export const services: Service[] = [
  {
    title: "Desarrollo Backend con Node.js",
    description:
      "APIs seguras y escalables con Express, integradas con bases de datos MongoDB.",
    icon: Server,
  },
  {
    title: "Integración de APIs y Automatización",
    description:
      "Conexión de servicios externos, sincronización de datos y flujos avanzados con n8n.",
    icon: Workflow,
  },
  {
    title: "Chatbots para WhatsApp con IA",
    description:
      "Bots conversacionales usando WhatsApp API y modelos de IA como Gemini.",
    icon: MessagesSquare,
  },
  {
    title: "Desarrollo y mantenimiento en WordPress",
    description:
      "Creación de funcionalidades personalizadas, integración de APIs y optimización.",
    icon: Globe,
  },
  {
    title: "SEO y optimización web",
    description:
      "Mejoras de rendimiento, posicionamiento básico y gestión de hosting.",
    icon: TrendingUp,
  },
  {
    title: "Soporte Técnico y Soluciones Digitales",
    description:
      "Diagnóstico, configuración de sistemas y acompañamiento tecnológico.",
    icon: Wrench,
  },
];

// -------------------- PROJECTS --------------------

export const projects: Project[] = [
  {
    id: "fries",
    name: "Fries",
    short: "Sistema web para gestión de proyectos de extensión universitaria.",
    description:
      "Plataforma con flujos de aprobación por roles, panel administrativo avanzado, exportación de datos y control granular de permisos. Desarrollada con Next.js, React, HeroUI, Node.js, Express y MongoDB.",
    tech: ["Next.js", "React", "HeroUI", "Node.js", "Express", "MongoDB"],
    image: "https://res.cloudinary.com/dhaxrwwio/image/upload/v1765473267/proyecto-fries_utq3hg.png",
    link: "https://fries-seven.vercel.app/"
  },
  {
    id: "bienestapp",
    name: "Bienestapp",
    short:
      "Plataforma de bienestar estudiantil con agendamiento y chatbot en WhatsApp.",
    description:
      "Sistema para asesorías académicas, agenda dinámica, integraciones con WhatsApp API y un asistente conversacional con IA (Gemini).",
    tech: ["Node.js", "MongoDB", "WhatsApp API", "Gemini", "React"],
    image: "https://res.cloudinary.com/dhaxrwwio/image/upload/v1765473266/bienestapp_q5ed81.png",
    link: "https://bienestapp-frontend.vercel.app/"
  },
  {
    id: "kumonera",
    name: "Integración API Kumonera",
    short: "Sincronización en tiempo real entre la app y el sitio WordPress.",
    description:
      "Integración de la API móvil para mostrar promociones, categorías y comercios de forma dinámica en el sitio web.",
    tech: ["WordPress", "PHP", "REST API"],
    image: "https://res.cloudinary.com/dhaxrwwio/image/upload/v1765477190/kumonera_qmyayd.png"
  },
  {
    id: "premium-sport",
    name: "Plugin Premium Sport",
    short:
      "Plugin WordPress para sincronizar inventarios entre tiendas físicas y tienda online.",
    description:
      "Actualización automática de productos, creación de nuevos ítems y sincronización completa con la API interna.",
    tech: ["WordPress", "PHP", "REST API"],
    image: "https://res.cloudinary.com/dhaxrwwio/image/upload/v1765477981/premiumSport_f9c2wo.png"
  },
  {
    id: "ecoproyecta",
    name: "Ecoproyecta",
    short: "Portal web orientado a proyectos de sostenibilidad.",
    description:
      "Sitio informativo desarrollado con WordPress y Elementor para promover iniciativas ecológicas.",
    tech: ["WordPress", "Elementor"],
    image: "https://res.cloudinary.com/dhaxrwwio/image/upload/v1765474171/Captura_de_pantalla_2025-12-11_122920_gjmja9.png"
  },
  {
    id: "sora-coworking",
    name: "Sora Coworking",
    short: "Sitio web oficial de un coworking profesional.",
    description:
      "Estructura visual moderna y adaptable con WordPress, diseñada para mostrar servicios y planes.",
    tech: ["WordPress"],
    image: "https://res.cloudinary.com/dhaxrwwio/image/upload/v1765475183/soracoworking_dmeugc.png"
  },
];

// -------------------- SKILLS --------------------


export const skills = [
  { name: "Node.js", icon: SkillIcons.node },
  { name: "Express", icon: SkillIcons.express },
  { name: "MongoDB", icon: SkillIcons.mongo },
  { name: "REST APIs", icon: SkillIcons.rest },
  { name: "WhatsApp API", icon: SkillIcons.whatsapp },
  { name: "Gemini / IA", icon: SkillIcons.gemini },
  { name: "n8n", icon: SkillIcons.n8n },
  { name: "JavaScript", icon: SkillIcons.javascript },
  { name: "React", icon: SkillIcons.react },
  { name: "Next.js", icon: SkillIcons.next },
  { name: "HTML", icon: SkillIcons.html },
  { name: "CSS", icon: SkillIcons.css },
  { name: "WordPress", icon: SkillIcons.wordpress },
  { name: "SEO", icon: SkillIcons.seo },
  { name: "Git", icon: SkillIcons.git },
  { name: "Figma", icon: SkillIcons.figma },
  { name: "github", icon: SkillIcons.github },
];

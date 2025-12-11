export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Anderson | Portafolio",
  description: "Portafolio profesional de Anderson Ochoa.",
  
  // Enlaces del navbar para una sola landing page
  navItems: [
    {
      label: "Inicio",
      href: "#home",
    },
    {
      label: "Servicios",
      href: "#services",
    },
    {
      label: "Portafolio",
      href: "#portfolio",
    },
    {
      label: "Habilidades",
      href: "#skills",
    },
    {
      label: "Contacto",
      href: "#contact",
    },
  ],

  // Menú móvil también será interno
  navMenuItems: [
    {
      label: "Inicio",
      href: "#home",
    },
    {
      label: "Servicios",
      href: "#services",
    },
    {
      label: "Portafolio",
      href: "#portfolio",
    },
    {
      label: "Contacto",
      href: "#contact",
    },
  ],

  links: {
    github: "https://github.com/tu_usuario_github",
    twitter: "https://twitter.com/tu_usuario",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "",
  },
};

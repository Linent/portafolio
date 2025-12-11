import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export const useActiveSection = () => {
  const [active, setActive] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      siteConfig.navItems.forEach((item) => {
        const el = document.querySelector(item.href) as HTMLElement;
        if (!el) return;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
};

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useNavbarScrollState } from "@/hooks/useNavbarScrollState";
import { useActiveSection } from "@/hooks/useActiveSection";

export const Navbar = () => {
  const isScrolled = useNavbarScrollState();
  const active = useActiveSection();
  const { handleClick } = useSmoothScroll();

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className={`
        top-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/80 dark:bg-[#0c0c14]/80 backdrop-blur-lg shadow-md border-b border-gray-300 dark:border-gray-800"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      {/* BRAND */}
      <NavbarBrand>
        <Link
          href="#home"
          onClick={(e) => handleClick("#home")(e as React.MouseEvent<HTMLAnchorElement>)}
          className="flex items-center gap-3 font-semibold tracking-wide"
        >
          <div className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center text-lg font-bold shadow-md">
            A
          </div>
          <span className="text-gray-900 dark:text-white font-bold text-lg">
            Portafolio
          </span>
        </Link>
      </NavbarBrand>

      {/* DESKTOP */}
      <NavbarContent className="hidden md:flex items-center gap-8" justify="end">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              onClick={(e) => handleClick(item.href)(e as React.MouseEvent<HTMLAnchorElement>)}
              className={`
                text-sm transition-colors font-medium
                ${
                  active === item.href
                    ? "text-pink-600 dark:text-pink-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
                }
              `}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}

        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            href="#contact"
            onClick={(e) => handleClick("#contact")(e as React.MouseEvent<HTMLButtonElement>)}
            radius="full"
            className="bg-pink-600 text-white hover:bg-pink-500 px-6 py-2 font-medium transition"
          >
            Contáctame
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* MOBILE */}
      <NavbarContent className="md:hidden" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-white/95 dark:bg-[#0c0c14]/95 backdrop-blur-xl">
        {siteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={item.href}
              onClick={(e) => handleClick(item.href)(e as React.MouseEvent<HTMLAnchorElement>)}
              className={`
                text-lg transition-colors
                ${
                  active === item.href
                    ? "text-pink-600 dark:text-pink-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-pink-600"
                }
              `}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem>
          <Button
            as={Link}
            href="#contact"
            onClick={(e) => handleClick("#contact")(e as React.MouseEvent<HTMLButtonElement>)}
            radius="full"
            className="w-full bg-pink-600 text-white mt-4 hover:bg-pink-500 transition"
          >
            Contáctame
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

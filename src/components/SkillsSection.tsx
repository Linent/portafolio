import { FC } from "react";
import { Chip } from "@heroui/chip";
import { skills } from "@/types/type";

export const SkillsSection: FC = () => {
  return (
    <section id="skills" className="py-24 space-y-10">
      <p className="text-pink-600 dark:text-pink-500 text-xs uppercase tracking-[0.25em]">
        Habilidades
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        Tecnologías que manejo
      </h2>

      <div className="flex flex-wrap gap-4 pt-4">
        {skills.map(({ name, icon: Icon }) => (
          <Chip
            key={name}
            radius="lg"
            variant="flat"
            className="
              h-13               /* ALTURA UNIFORME (40px) */
              px-4
              text-foreground    /* Cambia según tema */
              bg-default-100     /* Cambia según tema */
              dark:bg-default-50 /* Para modo oscuro */
              flex items-center gap-2
              hover:bg-default-200 dark:hover:bg-default-100
              border border-default-200 dark:border-default-100
              transition-all
            "
          >
            {Icon && typeof Icon === "function"
              ? (
                  // Try to render as a React component
                  <Icon />
                )
              : (
                  // Otherwise, render as is (could be a string, JSX, etc.)
                  <span className="w-5 h-5 object-contain">{Icon}</span>
                )
            }
            <span className="font-medium text-sm">{name}</span>
          </Chip>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

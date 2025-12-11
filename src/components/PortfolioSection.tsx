import { FC } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { projects } from "@/types/type";

export const PortfolioSection: FC = () => {
  return (
    <section id="portfolio" className="py-24 space-y-10">
      <p className="text-pink-600 dark:text-pink-500 text-xs uppercase tracking-[0.25em]">
        Mis proyectos
      </p>

      <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
        Portafolio
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {projects.map((project) => (
          <Card
            key={project.id}
            radius="lg"
            className="
              bg-white dark:bg-gray-900/60 
              border border-gray-300 dark:border-gray-800
              hover:border-pink-600/70 transition-all
            "
          >
            <CardHeader className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {project.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {project.short}
              </p>
            </CardHeader>

            <CardBody className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <Chip
                    key={t}
                    size="sm"
                    radius="lg"
                    className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs"
                  >
                    {t}
                  </Chip>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

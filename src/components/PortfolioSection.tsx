import { FC } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { projects } from "@/types/type";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/motion";
import { Image } from "@heroui/react";

export const PortfolioSection: FC = () => {
  return (
    <section id="portfolio" className="py-24 space-y-10">
      {/* TITULO ANIMADO */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-pink-600 dark:text-pink-500 text-xs uppercase tracking-[0.25em]"
      >
        Mis proyectos
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-foreground"
      >
        Portafolio
      </motion.h2>

      {/* GRID CON ANIMACIÓN STAGGER */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-10 md:grid-cols-3 items-stretch"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            className="flex overflow-hidden" // ← Esto es CLAVE
          >
            {/* Card SIN ANIMACIÓN DIRECTA */}
            <Card
              radius="lg"
              className="
          flex flex-col w-full
          bg-white dark:bg-gray-900/60 
          border border-gray-300 dark:border-gray-800
          hover:border-pink-600/70 
          hover:shadow-[0_0_20px_-5px_rgba(255,0,130,0.35)]
          hover:-translate-y-1
          transition-all
          overflow-hidden
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

              <CardBody className="space-y-4 flex-grow overflow-visible">
                <Image
                  alt={project.name}
                  src={project.image}/>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioSection;

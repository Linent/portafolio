import { FC } from "react";
import { Chip } from "@heroui/chip";
import { skills } from "@/types/type";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/motion";

export const SkillsSection: FC = () => {
  return (
    <section id="skills" className="py-24 space-y-10">
      {/* TÍTULO ANIMADO */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-pink-600 dark:text-pink-500 text-xs uppercase tracking-[0.25em]"
      >
        Habilidades
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-foreground"
      >
        Tecnologías que manejo
      </motion.h2>

      {/* CHIPS CON STAGGER + FADE + SPRING */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap gap-4 pt-4"
      >
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            variants={fadeUp}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Chip
              radius="lg"
              variant="flat"
              className="
                h-12
                px-4
                text-foreground
                bg-default-100 
                dark:bg-default-50
                flex items-center gap-2
                border border-default-200 dark:border-default-100
                hover:bg-default-200 dark:hover:bg-default-100
                transition-all
              "
            >
              {/* ICONO */}
              {Icon && typeof Icon === "function" ? (
                <span className="w-5 h-5"><Icon /></span>
              ) : (
                <span className="w-5 h-5">{Icon}</span>
              )}

              {/* TEXTO */}
              <span className="font-medium text-sm">{name}</span>
            </Chip>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;

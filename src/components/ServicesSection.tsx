import { FC } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { services } from "@/types/type";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/motion";

export const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-24 space-y-10">
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-pink-600 dark:text-pink-500 text-xs uppercase tracking-[0.25em]"
      >
        Servicios
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-foreground"
      >
        Lo que hago
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 md:grid-cols-3 items-stretch"
      >
        {services.map(({ title, description, icon: Icon }) => (
          <motion.div variants={fadeUp} key={title} className="flex">
            <Card
              radius="lg"
              className="
                flex flex-col w-full
                bg-white dark:bg-gray-900/60 
                border border-gray-300 dark:border-gray-800
                hover:border-pink-600/70 
                hover:shadow-[0_0_20px_-5px_rgba(255,0,120,0.3)]
                hover:-translate-y-1
                transition-all
              "
            >
              <CardHeader className="flex items-center gap-3">
                {Icon && (
                  <Icon className="w-6 h-6 text-pink-600 dark:text-pink-500" />
                )}
                <h3 className="font-semibold text-xl text-foreground">{title}</h3>
              </CardHeader>

              <CardBody className="flex-grow">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;

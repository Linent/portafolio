import { FC } from "react";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/react";
import { motion } from "framer-motion";
import { fadeUp, slideInRight, staggerContainer } from "@/utils/motion";

export const HeroSection: FC = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-24 grid gap-12 md:grid-cols-2 items-center"
    >

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="space-y-6"
      >
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-[0.25em] text-xs text-gray-500 dark:text-gray-400"
        >
          Bienvenido a mi mundo
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Hola, soy{" "}
          <span className="text-pink-600 dark:text-pink-500">Anderson</span>
          <br />
          <span className="text-gray-800 dark:text-gray-200">
            Desarrollador Backend
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 dark:text-gray-400 max-w-lg"
        >
          Desarrollador backend con experiencia en Node.js, Express y MongoDB,
          especializado en APIs, automatización de procesos y chatbots con IA.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <Button
            radius="full"
            className="bg-pink-600 text-white hover:bg-pink-500 transition px-8 py-2"
            href="#portfolio"
          >
            Ver portafolio
          </Button>

          <Button
            radius="full"
            variant="bordered"
            className="border-gray-600 dark:border-gray-400 text-gray-700 dark:text-gray-300 hover:border-pink-500 hover:text-pink-500 transition"
            href="#contact"
          >
            Contacto
          </Button>
        </motion.div>
      </motion.div>


      <motion.div
        variants={slideInRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center"
      >
        <Card
          className="
            w-full max-w-sm 
            bg-gray-200 dark:bg-gray-800/60 
            border border-gray-300 dark:border-gray-700/40 
            shadow-md dark:shadow-none
            hover:-translate-y-1 hover:shadow-lg transition-all
          "
        >
          <CardBody className="flex flex-col items-center py-10 gap-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Image
                alt="Foto de perfil"
                src="https://res.cloudinary.com/dhaxrwwio/image/upload/v1763317054/profile_images/o4v0sdaaei8wqtl1lenu.jpg"
                width={200}
                className="rounded-xl"
                isZoomed
              />
            </motion.div>

            <h3 className="text-gray-800 dark:text-white font-semibold text-lg">
              Anderson Ochoa
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Desarrollador Backend
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </section>
  );
};

export default HeroSection;

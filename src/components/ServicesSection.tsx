import { FC } from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { services } from "@/types/type";

export const ServicesSection: FC = () => {
  return (
    <section id="services" className="py-24 space-y-10">
      <p className="text-pink-600 dark:text-pink-500 text-xs uppercase tracking-[0.25em]">
        Servicios
      </p>

      <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
        Lo que hago
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.title}
            radius="lg"
            className="
              bg-white dark:bg-gray-900/60 
              border border-gray-300 dark:border-gray-800
              hover:border-pink-600/70 transition-all
            "
          >
            <CardHeader className="pb-0">
              <h3 className="font-semibold text-xl text-gray-800 dark:text-white">
                {service.title}
              </h3>
            </CardHeader>

            <CardBody>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

import { FC } from "react";
import { Input, Textarea, Button } from "@heroui/react"
import { profile } from "@/types/type";

export const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-24 space-y-10">
      <p className="text-pink-600 dark:text-pink-500 text-xs uppercase tracking-[0.25em]">
        Contacto
      </p>

      <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
        Ponte en contacto
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* INFO */}
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="text-lg">
            Si deseas trabajar conmigo, colaborar o necesitas más información,
            escríbeme.
          </p>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Email
            </p>
            <p>{profile.email}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Teléfono
            </p>
            <p>{profile.phone}</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              Ubicación
            </p>
            <p>{profile.location}</p>
          </div>
        </div>

        {/* FORMULARIO */}
        <form className="space-y-6">
          <Input
            label="Nombre"
            radius="lg"
            placeholder="Escribe tu nombre"
          />

          <Input
            label="Email"
            radius="lg"
            placeholder="correo@ejemplo.com"
          />

          <Textarea
            label="Mensaje"
            radius="lg"
            placeholder="Escribe tu mensaje aquí..."
            minRows={6}
          />

          <Button
            radius="full"
            className="bg-pink-600 text-white hover:bg-pink-500 transition px-8 py-2"
            type="submit"
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

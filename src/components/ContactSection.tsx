import { FC } from "react";
import { Mail, Send, MessageCircle } from "lucide-react";
import { profile } from "@/types/type";
import { motion } from "framer-motion";
import { slideInRight, fadeUp, staggerContainer } from "@/utils/motion";

export const ContactSection: FC = () => {
  const email = `${profile.email?.split("@")[0]}@${profile.email?.split("@")[1]}`;

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hola, quiero más información sobre tus servicios."
    );

    const cleanPhone = profile.phone.replace(/\D/g, "");

    window.open(`https://wa.me/${cleanPhone}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 space-y-10">
      
      {/* TÍTULO */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-pink-600 dark:text-pink-500 text-xs uppercase tracking-[0.25em]"
      >
        Contacto
      </motion.p>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-foreground"
      >
        Ponte en contacto
      </motion.h2>

      {/* GRID ANIMADA */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-10 md:grid-cols-2"
      >
        {/* COLUMNA IZQUIERDA (fade-up) */}
        <motion.div variants={fadeUp} className="space-y-6 text-gray-700 dark:text-gray-300">

          <p className="text-lg">
            Si deseas trabajar conmigo, colaborar o necesitas más información,
            puedes contactarme directamente por correo o WhatsApp.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-pink-600 dark:text-pink-500" />
            <a
              href={`mailto:${email}`}
              className="text-foreground hover:text-pink-600 dark:hover:text-pink-500 transition"
            >
              {email}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-pink-600 dark:text-pink-500" />
            <button
              onClick={openWhatsApp}
              className="text-foreground hover:text-pink-600 dark:hover:text-pink-500 transition"
            >
              WhatsApp
            </button>
          </div>

        </motion.div>

        {/* COLUMNA DERECHA (animación desde la derecha) */}
        <motion.div
          variants={slideInRight}
          className="space-y-4"
        >
          {/* Botón Email */}
          <a
            href={`mailto:${email}`}
            className="
              flex items-center justify-center gap-2
              bg-pink-600 hover:bg-pink-500
              text-white px-6 py-3 rounded-xl
              font-medium transition shadow
            "
          >
            <Send className="w-5 h-5" />
            Enviar correo
          </a>

          {/* Botón WhatsApp */}
          <button
            onClick={openWhatsApp}
            className="
              flex items-center justify-center gap-2
              border border-pink-500
              text-pink-600 dark:text-pink-400
              hover:bg-pink-500 hover:text-white
              dark:hover:bg-pink-400 dark:hover:text-black
              px-6 py-3 rounded-xl font-medium transition
              w-full
            "
          >
            <MessageCircle className="w-5 h-5" />
            Enviar mensaje por WhatsApp
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

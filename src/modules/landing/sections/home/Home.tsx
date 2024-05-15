import { Send, ArrowDown } from "iconoir-react";
import { motion } from "framer-motion";

import { Figure4, Figure5 } from "@assets/svg";
import { IconButton } from "@modules/core/components";
import { MediaLink } from "@modules/landing/components";

import styles from "./Home.module.css";
import { IllustrationHome1, IllustrationHome2 } from "@assets/images";

const Home = (): JSX.Element => {
  return (
    <section className={styles.home} id="home">
      <motion.article
        initial={{ marginTop: -150, opacity: 0 }}
        whileInView={{ marginTop: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 3 }}
      >
        <h1 className="heading1">
          Cashmoney RD Servicio de préstamos personales
        </h1>
        <p className="buttonText">
          Descubre la solución financiera que necesitas con Cash Money RD! Como
          líderes en el sector, nos enorgullece ofrecerte nuestros préstamos
          personales para empleados públicos y privados que reciben su salario
          por nómina. ¿Necesitas cubrir gastos inesperados, realizar un proyecto
          personal o invertir en tu futuro? ¡No busques más! En Cash Money RD,
          te ofrecemos tasas de interés competitivas, plazos flexibles de pago y
          un proceso de solicitud rápido y sencillo. Nuestro compromiso es
          brindarte la ayuda financiera que necesitas de manera confiable y
          eficiente. ¡Obtén tu préstamo personal hoy mismo con Cash Money RD y
          haz realidad tus proyectos!
        </p>

        <IconButton
          Icon={Send}
          label="Contáctanos"
          id="btn-contact"
          type="button"
          title="Ponte en contacto con nosotros"
          variant="primary"
          loading={false}
          onClick={() => {
            window.location.href = "#contact";
          }}
        />
      </motion.article>
      <motion.img
        id="img-2"
        src={IllustrationHome2}
        alt="Cashmoney image 2"
        loading="lazy"
        animate={{ y: [0, 30, 0, 30, 0] }}
        transition={{
          ease: "easeInOut",
          duration: 5,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <motion.img
        id="img-1"
        src={IllustrationHome1}
        alt="Cashmoney image 1"
        loading="lazy"
        animate={{ y: [30, 0, 30, 0, 30] }}
        transition={{
          ease: "easeInOut",
          duration: 5,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <Figure5 id="figure-left" color="var(--primary)" />
      <Figure4 id="figure-right" color="var(--primary)" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 250, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
      >
        <MediaLink href="#services" title="Servicios" Icon={ArrowDown} />
      </motion.div>
    </section>
  );
};

export default Home;

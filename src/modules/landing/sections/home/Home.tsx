import { Send, ArrowDown } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import { Figure4, Figure5 } from "@assets/svg";
import { IconButton } from "@modules/core/components";
import { MediaLink } from "@modules/landing/components";

import styles from "./Home.module.css";
import { IllustrationHome1, IllustrationHome2 } from "@assets/images";

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className={styles.home} id="home">
      <article>
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
            navigate("#contact");
          }}
        />
      </article>
      <img
        id="img-2"
        src={IllustrationHome2}
        alt="Cashmoney image 2"
        loading="lazy"
      />
      <img
        id="img-1"
        src={IllustrationHome1}
        alt="Cashmoney image 1"
        loading="lazy"
      />
      <Figure5 id="figure-left" color="var(--primary)" />
      <Figure4 id="figure-right" color="var(--primary)" />
      <MediaLink href="#services" title="Servicios" Icon={ArrowDown} />
    </section>
  );
};

export default Home;

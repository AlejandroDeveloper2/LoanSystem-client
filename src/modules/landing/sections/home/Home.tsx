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
          ¡Hola! Somos el equipo de Cashmoney RD, y estamos aquí para
          acompañarte en tus desafíos financieros. Nos dedicamos a encontrar
          soluciones que se adapten a ti, porque sabemos que cada situación es
          única. Queremos que te sientas seguro con nosotros, por eso ponemos la
          transparencia y la confiabilidad en el centro de todo lo que hacemos.
          Estamos aquí para apoyarte en cada paso de tu camino financiero.
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

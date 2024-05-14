import { ArrowUp, DoubleCheck } from "iconoir-react";

import { Figure4, Figure5 } from "@assets/svg";
import { FeatureCard, MediaLink } from "@modules/landing/components";

import {
  IllustrationServices1,
  IllustrationServices2,
  IllustrationServices3,
} from "@assets/images";
import styles from "./Services.module.css";

const Services = (): JSX.Element => {
  return (
    <section id="services" className={styles.services}>
      <article className={styles.serviceDescription}>
        <img
          src={IllustrationServices1}
          alt="Cashmoney servicio descripción"
          loading="lazy"
        />
        <div className={styles.text}>
          <h1 className="heading1">Nuestro Servicio</h1>
          <p className="buttonText">
            Sabemos que a veces la vida te presenta desafíos financieros
            inesperados y que necesitas un poco de ayuda para superarlos. En
            Cashmoney RD, nos preocupamos por ti y queremos ser ese apoyo en
            momentos difíciles. Ya sea que estés pensando en consolidar tus
            deudas, darle un nuevo aire a tu hogar o simplemente necesites
            cubrir gastos imprevistos, estamos aquí para ofrecerte soluciones
            financieras adaptadas a tu situación. Nos comprometemos a hacer que
            el proceso sea lo más fácil y claro posible, para que puedas obtener
            el dinero que necesitas y seguir adelante con tranquilidad.
          </p>
        </div>
      </article>
      <article className={styles.howWorks}>
        <img
          src={IllustrationServices2}
          alt="Cashmoney como funciona"
          loading="lazy"
        />
        <div className={styles.text}>
          <h1 className="heading1">¿Cómo funciona?</h1>
          <p className="buttonText">
            <DoubleCheck /> Los préstamos personales tienen una{" "}
            <span>tasa mensual de un 7%.</span>
          </p>
          <p className="buttonText">
            <DoubleCheck />
            Se paga por cuotas: capital e interés junto hasta finalizar el
            préstamo.
          </p>
        </div>
      </article>
      <article className={styles.steps}>
        <img
          src={IllustrationServices3}
          alt="Cashmoney como aplicar a un crédito"
          loading="lazy"
        />
        <div className={styles.text}>
          <h1 className="heading1">Pasos para aplicar a un crédito</h1>
          <p className="buttonText">
            <span>1.</span> Llenar el formulario inicial con los datos
            requeridos en la sección de contáctenos.
          </p>
          <p className="buttonText">
            <span>2.</span> Esperar la respuesta de nuestro equipo via{" "}
            <span>WhastApp.</span>
          </p>
          <p className="buttonText">
            <span>3.</span> En caso de cumplir con los requisitos y
            documentación requerida se le enviará un link via email o WhasApp
            para realizar la solicitud de préstamo online.
          </p>
          <p className="buttonText">
            <span>4.</span> Ya eres cliente de nuestra empresa!
          </p>
        </div>
      </article>
      <article className={styles.requeriments}>
        <h1 className="heading1">Requisitos</h1>
        <p className="buttonText">
          Para aplicar al crédito se debe cumplir con los siguientes requisitos:
        </p>
        <ul className={styles.cardList}>
          <FeatureCard text="Ser empleado público o privado" />
          <FeatureCard text="Tarjeta de cobro de nómina (Débito)" />
          <FeatureCard text="Tarjeta de código" />
          <FeatureCard text="Acceso al banking" />
        </ul>
      </article>
      <Figure5 id="figure-left" color="var(--white)" />
      <Figure4 id="figure-right" color="var(--white)" />
      <MediaLink href="#home" title="Inicio" Icon={ArrowUp} />
    </section>
  );
};

export default Services;

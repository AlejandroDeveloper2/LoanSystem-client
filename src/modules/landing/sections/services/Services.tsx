import { motion } from "framer-motion";
import { ArrowUp, DoubleCheck } from "iconoir-react";

import { Figure4, Figure5 } from "@assets/svg";
import {
  FeatureCard,
  LoanApplicationForm,
  MediaLink,
} from "@modules/landing/components";

import {
  IllustrationServices1,
  IllustrationServices2,
  IllustrationServices3,
} from "@assets/images";
import styles from "./Services.module.css";

const Services = (): JSX.Element => {
  return (
    <section id="services" className={"section" + " " + styles.services}>
      <motion.article
        className={styles.serviceDescription}
        initial={{ x: -150 }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
      >
        <img
          src={IllustrationServices1}
          alt="Cashmoney servicio descripción"
          loading="lazy"
        />
        <div className={styles.text}>
          <h1 className="heading1">Nuestro Servicio</h1>
          <p className="buttonText">
            Somos más que un equipo, somos tu aliado en los desafíos
            financieros. En Cash Money RD, nos dedicamos a encontrar soluciones
            a medida para cada cliente, reconociendo que cada situación es
            única. Nuestro compromiso es brindarte seguridad y confianza en cada
            paso del proceso. No solo somos un negocio, sino también una mano
            amiga en momentos de inoportunidad o imprevistos financieros.
            Estamos aquí para ayudarte a superar cualquier obstáculo y alcanzar
            tus metas. ¡Confía en nosotros para encontrar la solución que
            necesitas!
          </p>
        </div>
      </motion.article>
      <motion.article
        className={styles.howWorks}
        initial={{ x: 150 }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
      >
        <img
          src={IllustrationServices2}
          alt="Cashmoney como funciona"
          loading="lazy"
        />
        <div className={styles.text}>
          <h1 className="heading1">¿Cómo funciona?</h1>
          <p className="buttonText">
            <DoubleCheck /> Ofrecemos préstamos personales con una{" "}
            <span>tasa de interés mensual del 7%</span>, garantizando
            transparencia y estabilidad en tus pagos.
          </p>
          <p className="buttonText">
            <DoubleCheck />
            Puedes optar por realizar tus pagos de manera flexible, adaptándolos
            a tu ritmo de ingresos por nóminas, ya sea en cuotas semanales,
            quincenales o mensuales, cubriendo tanto el capital como los
            intereses acumulados.
          </p>
        </div>
      </motion.article>
      <article className={styles.requeriments}>
        <h1 className="heading1">Requisitos</h1>
        <p className="buttonText">
          Para aplicar al crédito se debe cumplir con los siguientes requisitos:
        </p>
        <ul className={styles.cardList}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <FeatureCard text="Ser empleado público o privado" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2, delay: 1, ease: "easeIn" }}
          >
            <FeatureCard text="Tarjeta de cobro de nómina (Débito)" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2, delay: 2, ease: "easeIn" }}
          >
            <FeatureCard text="Tarjeta de código" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 2, delay: 3, ease: "easeIn" }}
          >
            <FeatureCard text="Acceso al banking" />
          </motion.div>
        </ul>
      </article>
      <motion.article
        className={styles.steps}
        initial={{ x: -150 }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
      >
        <img
          src={IllustrationServices3}
          alt="Cashmoney como aplicar a un crédito"
          loading="lazy"
        />
        <div className={styles.text}>
          <h1 className="heading1">Aplica aquí</h1>
          <p className="buttonText">
            <span>1.</span> Llenar la pre-solicitud con los datos requeridos.
          </p>
          <p className="buttonText">
            <span>2.</span> Recibirá un correo de nuestro equipo pre-aprobando
            el préstamo.
          </p>
          <p className="buttonText">
            <span>3.</span> Completar solicitud.
          </p>
          <p className="buttonText">
            <span>4.</span>Ya eres cliente de nuestra empresa!
          </p>
        </div>
      </motion.article>
      <motion.article
        className={styles.formSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <h1 className="heading1">Formulario para aplicar a un crédito</h1>
        <p className="buttonText">
          ¿Interesado en solicitar un crédito con nosotros? Por favor, completa
          el siguiente formulario con tus datos correspondientes. Estamos listos
          para ayudarte en el proceso
        </p>
        <LoanApplicationForm />
      </motion.article>

      <Figure5 id="figure-left" color="var(--white)" />
      <Figure4 id="figure-right" color="var(--white)" />
      <MediaLink href="#home" title="Inicio" Icon={ArrowUp} />
    </section>
  );
};

export default Services;

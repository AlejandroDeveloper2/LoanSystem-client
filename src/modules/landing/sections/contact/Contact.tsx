import { motion } from "framer-motion";
import { Instagram } from "iconoir-react";

import { MediaLinkList } from "@modules/landing/components";
import { Figure4, Figure5 } from "@assets/svg";

import { IllustrationContact1 } from "@assets/images";
import styles from "./Contact.module.css";

const Contact = (): JSX.Element => {
  return (
    <section className={styles.contact} id="contact">
      <motion.article
        className={styles.contactDescription}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img
          src={IllustrationContact1}
          alt="Cashmoney contactanos"
          loading="lazy"
        />
        <div className={styles.text}>
          <h1 className="heading1">Contáctanos</h1>
          <p className="buttonText">
            Nuestra sección de 'Contáctenos' es tu puerta de entrada directa a
            nuestro equipo. Si tienes alguna pregunta, comentario o simplemente
            quieres ponerte en contacto con nosotros, ¡estamos aquí para
            ayudarte! Utiliza esta sección para enviarnos un mensaje a través de
            nuestras redes sociales o comunicarte a el teléfono número
            <span> 8296871566</span> y nos pondremos en contacto contigo lo
            antes posible. Tu satisfacción es nuestra prioridad, y estamos
            ansiosos por escucharte.
          </p>
          <MediaLinkList>
            {/* <MediaLinkList.Link
              Icon={Facebook}
              title="Facebook"
              href="#"
              external
            /> */}
            <MediaLinkList.Link
              Icon={Instagram}
              title="Instagram"
              href="https://www.instagram.com/cashmoneyrd?igsh=czk2bXRsbmR2Z2hv"
              external
            />
            {/* <MediaLinkList.Link
              Icon={Telegram}
              title="Instagram"
              href="#"
              external
            /> */}
          </MediaLinkList>
        </div>
      </motion.article>
      <Figure5 id="figure-left" color="var(--white)" />
      <Figure4 id="figure-right" color="var(--white)" />
    </section>
  );
};

export default Contact;

import { ArrowUp } from "iconoir-react";

import { IllustrationQuestions1 } from "@assets/images";
import { MediaLink, QuestionCard } from "@modules/landing/components";

import styles from "./Questions.module.css";
import { Figure4, Figure5 } from "@assets/svg";

const Questions = (): JSX.Element => {
  return (
    <section id="questions" className={"section" + " " + styles.questions}>
      <article className={styles.description}>
        <img
          src={IllustrationQuestions1}
          alt="Cashmoney preguntas frecuentes"
          loading="lazy"
        />
        <div className={styles.text}>
          <h1 className="heading1">Preguntas frecuentes</h1>
          <p className="buttonText">
            ¡Bienvenido a nuestra sección de Preguntas Frecuentes! Aquí hemos
            recopilado las consultas más habituales de nuestros clientes para
            brindarte respuestas claras y útiles:
          </p>
        </div>
      </article>
      <ul className={styles.cardList}>
        <QuestionCard
          answer="El monto máximo por primera vez es de $20,0000 pesos."
          question="¿Cuál es el monto máximo que puedo solicitar por primera vez?"
        />
        <QuestionCard
          answer="La tasa de interés es de un 7% mensual."
          question="¿Cuál es la tasa de interés?"
        />
        <QuestionCard
          answer="Autorización para descontar la cuota de su tarjeta de nómina y/o por transferencia por Internet Banking."
          question="¿Qué debo dejar de garantía?"
        />
        <QuestionCard
          answer="Se requiere enviar por esta misma vía su carta de trabajo, foto de cédula de identidad y los estados de cuenta de los últimos 3 meses donde se pueda verificar su cobro por nómina. "
          question="¿Qué necesito para pre-aplicar?"
        />
        <QuestionCard
          answer="Se requiere carta de trabajo, cédula o identificación personal y Estados de cuenta de nómina."
          question="¿Qué documentación se necesita para aplicar a un crédito?"
        />
      </ul>
      <Figure5 id="figure-left" color="var(--primary)" />
      <Figure4 id="figure-right" color="var(--primary)" />
      <MediaLink href="#services" title="Servicios" Icon={ArrowUp} />
    </section>
  );
};

export default Questions;

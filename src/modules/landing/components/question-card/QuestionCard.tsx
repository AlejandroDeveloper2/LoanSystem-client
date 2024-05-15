import { QuestionMark } from "iconoir-react";

import { QuestionCardProps } from "@modules/landing/interfaces/component-interfaces/QuestionCardProps";

import styles from "./QuestionCard.module.css";

const QuestionCard = ({ answer, question }: QuestionCardProps): JSX.Element => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>
        <QuestionMark />
      </div>
      <div className={styles.cardContent}>
        <p id="question-card-text" className="buttonText">
          {question}{" "}
        </p>
        <p id="question-card-answer" className="paragraph">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default QuestionCard;

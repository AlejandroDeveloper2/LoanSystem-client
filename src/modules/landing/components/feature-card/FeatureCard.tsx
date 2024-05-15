import { DoubleCheck } from "iconoir-react";

import { FeatureCardProps } from "@modules/landing/interfaces/component-interfaces/FeatureCardProps";

import styles from "./FeatureCard.module.css";

const FeatureCard = ({ text }: FeatureCardProps): JSX.Element => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>
        <DoubleCheck />
      </div>
      <p id="card-text" className="buttonText">
        {text}
      </p>
    </div>
  );
};

export default FeatureCard;

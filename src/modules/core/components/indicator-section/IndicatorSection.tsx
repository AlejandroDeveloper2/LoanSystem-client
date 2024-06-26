import { IndicatorSectionProps } from "@modules/core/interfaces/components-interfaces/IndicatorSectionProps";

import styles from "./IndicatorSection.module.css";

const IndicatorSection = ({ children }: IndicatorSectionProps): JSX.Element => {
  return (
    <section className={styles.indicatorSection}>
      <h3 className="heading3">Indicadores</h3>
      {children}
    </section>
  );
};

export default IndicatorSection;

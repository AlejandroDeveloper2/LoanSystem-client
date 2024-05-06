import { InputIndicatorProps } from "@modules/core/interfaces/components-interfaces/InputProps";

import { InputText } from "..";

import styles from "./Input.module.css";

const InputIndicator = ({
  indicatorLabel,
  ...props
}: InputIndicatorProps): JSX.Element => {
  return (
    <div className={styles.inputIndicator}>
      <InputText {...props} />
      <div className={styles.indicator}>
        <p className="paragraph">{indicatorLabel}</p>
      </div>
    </div>
  );
};

export default InputIndicator;

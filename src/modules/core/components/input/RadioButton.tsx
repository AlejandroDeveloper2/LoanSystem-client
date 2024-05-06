import {
  RadioButtonListProps,
  RadioButtonProps,
} from "@modules/core/interfaces/components-interfaces/InputProps";

import { InputBase } from "..";

import styles from "./Input.module.css";

const RadioButton = ({
  id,
  label,
  checked,
  ...props
}: RadioButtonProps): JSX.Element => {
  return (
    <div className={styles.radioButton}>
      <input type="radio" id={id} defaultChecked={checked} {...props} />
      <label htmlFor={id} className={styles.radioLabel + " " + "paragraph"}>
        {label}
      </label>
    </div>
  );
};

const RadioButtonList = ({
  radioButtons,
  ...props
}: RadioButtonListProps): JSX.Element => {
  return (
    <InputBase {...props}>
      <ul className={styles.radioButtonList}>
        {radioButtons.map((radioButton, i) => (
          <li key={i}>
            <RadioButton {...radioButton} />
          </li>
        ))}
      </ul>
    </InputBase>
  );
};

export default RadioButtonList;

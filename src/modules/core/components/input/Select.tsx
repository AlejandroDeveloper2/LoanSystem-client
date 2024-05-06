import { NavArrowRight } from "iconoir-react";

import { SelectProps } from "@modules/core/interfaces/components-interfaces/InputProps";

import { InputBase } from "..";

import styles from "./Input.module.css";

const Select = ({
  id,
  label,
  errorMessage,
  userHint,
  Icon,
  options,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <InputBase
      id={id}
      label={label}
      errorMessage={errorMessage}
      userHint={userHint}
    >
      <kbd className={styles.inputBody} id={id}>
        <Icon />
        <select className={styles.select} id={id} {...props}>
          <option value="" defaultValue={props.value}>
            -- Seleccione una opción --
          </option>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <NavArrowRight id="select-arrow" />
      </kbd>
    </InputBase>
  );
};

export default Select;

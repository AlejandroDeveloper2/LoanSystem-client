import { InputTextProps } from "@modules/core/interfaces/components-interfaces/InputProps";

import { InputBase } from "..";

import styles from "./Input.module.css";

const InputText = ({
  id,
  label,
  errorMessage,
  userHint,
  Icon,
  ...props
}: InputTextProps): JSX.Element => {
  return (
    <InputBase
      id={id}
      label={label}
      errorMessage={errorMessage}
      userHint={userHint}
    >
      <kbd className={styles.inputBody} id={id}>
        <Icon />
        <input id={id} {...props} />
      </kbd>
    </InputBase>
  );
};

export default InputText;

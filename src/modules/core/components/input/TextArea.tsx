import { TextAreaProps } from "@modules/core/interfaces/components-interfaces/InputProps";

import InputBase from "./InputBase";

import styles from "./Input.module.css";

const TextArea = ({
  id,
  label,
  errorMessage,
  userHint,
  Icon,
  autoResize,
  ...props
}: TextAreaProps): JSX.Element => {
  return (
    <InputBase
      id={id}
      label={label}
      errorMessage={errorMessage}
      userHint={userHint}
    >
      <kbd className={styles.inputBody + " " + styles.textAreaBody} id={id}>
        <Icon />
        <textarea
          className={
            autoResize ? styles.autoResizeStyle : styles.noAutoResizeStyle
          }
          id={id}
          {...props}
        />
      </kbd>
    </InputBase>
  );
};

export default TextArea;

import { InputBaseProps } from "@modules/core/interfaces/components-interfaces/InputProps";

import { ErrorMessage } from "..";

import styles from "./Input.module.css";

const InputBase = (props: InputBaseProps): JSX.Element => {
  const { children, id, label, errorMessage, userHint } = props;

  return (
    <div className={styles.inputContainer}>
      <label className="paragraph" htmlFor={id}>
        {label}
        {userHint ? (
          <span className={"captionText" + " " + styles.hintText}>
            {userHint}
          </span>
        ) : null}
      </label>
      {children}
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
    </div>
  );
};

export default InputBase;

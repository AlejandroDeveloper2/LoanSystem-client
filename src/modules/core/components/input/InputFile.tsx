import { InputFileProps } from "@modules/core/interfaces/components-interfaces/InputProps";

import { BaseButton, ErrorMessage } from "..";

import styles from "./Input.module.css";

const InputFile = ({
  id,
  Icon,
  fileName,
  value,
  errorMessage,
  label,
  onChange,
  ...props
}: InputFileProps): JSX.Element => {
  return (
    <div
      className={
        errorMessage !== ""
          ? styles.errorInputFileContainer
          : styles.inputFileContainer
      }
    >
      <p className="paragraph" id="filename">
        {value === "" ? "¡No se ha seleccionado ningún archivo!" : fileName}
      </p>
      <BaseButton id={id} type="button" {...props} onClick={() => {}}>
        <Icon />
        <label className={styles.fileLabel} htmlFor={id}></label>
        <span className="buttonText">{label}</span>
        <input
          type="file"
          name={id}
          id={id}
          className={styles.inputFile}
          onChange={onChange}
        />
      </BaseButton>

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
    </div>
  );
};

export default InputFile;

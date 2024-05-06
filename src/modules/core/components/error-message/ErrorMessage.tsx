import { ErrorMessageProps } from "@modules/core/interfaces/components-interfaces/ErrorMessageProps";

import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => {
  return <p className={styles.errorMessage + " " + "paragraph"}>{message}</p>;
};

export default ErrorMessage;

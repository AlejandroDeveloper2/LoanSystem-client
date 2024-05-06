import { BaseButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import { Spinner } from "..";

import styles from "./Button.module.css";

const BaseButton = ({
  children,
  variant,
  loading,
  ...props
}: BaseButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className={
        styles[variant] +
        " " +
        styles.baseButtonStyle +
        " " +
        styles[props.disabled ? "disabled" : ""]
      }
    >
      {loading ? <Spinner className="spinnerBar" /> : children}
    </button>
  );
};

export default BaseButton;

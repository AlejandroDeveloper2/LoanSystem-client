import { LogoProps } from "@modules/core/interfaces/components-interfaces/LogoProps";

import { LogoSvg } from "@assets/svg";

import styles from "./Logo.module.css";

const Logo = ({ title }: LogoProps): JSX.Element => {
  return (
    <i className={styles.logoContainer}>
      <LogoSvg />
      {title ? <h1 className="heading1">{title}</h1> : null}
    </i>
  );
};

export default Logo;

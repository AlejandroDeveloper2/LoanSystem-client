import { Logo, Spinner } from "..";
import { Figure1, Figure2 } from "@assets/svg";

import styles from "./LoadingWindow.module.css";

const LoadingWindow = (): JSX.Element => {
  return (
    <div className={styles.loadingWindow}>
      <Figure1 />
      <Figure2 />
      <div className={styles.logoContainer}>
        <Logo title="Cash Money RD" />
        <Spinner className="spinnerBarPrimary" message="Cargando..." />
      </div>
    </div>
  );
};

export default LoadingWindow;

import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { useSession } from "@modules/auth/hooks";
import { loadIllustration } from "@modules/core/utils/helpers";

import { steps } from "@modules/core/constants/stepsData";

import { Figure1, Figure2 } from "@assets/svg";
import { Logo, Stepper } from "@modules/core/components";

import styles from "./PublicLayout.module.css";

const PublicLayout = (): JSX.Element => {
  const location = useLocation();
  useSession(0);

  const illustrationData = loadIllustration(location.pathname);

  const pathnameArr = location.pathname
    .split("/")
    .filter((element) => element !== "");
  const isStepperLoaded: boolean =
    location.pathname.includes("loanRequest") && pathnameArr.length > 1;

  return (
    <main
      className={
        location.pathname === "/loanRequest"
          ? styles.mainContainerCentered
          : styles.mainContainer
      }
    >
      <Figure1 />
      <Figure2 />
      <section className={styles.contentSection}>
        <Logo
          title={
            location.pathname.includes("/loanRequest")
              ? "Solicitud de préstamo en Cash Money RD"
              : "Cash Money RD"
          }
        />
        {isStepperLoaded ? (
          <>
            <Stepper steps={steps} />
            <p className="paragraph" id="message-client-registered">
              Solicitud de préstamo para cliente nuevo. Siga los pasos y llene
              toda la información requerida
            </p>
          </>
        ) : null}
        <Outlet />
      </section>
      {illustrationData ? (
        <img
          className={styles.illustration}
          src={illustrationData.src}
          alt={illustrationData.alt}
          loading="lazy"
        />
      ) : null}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  );
};

export default PublicLayout;

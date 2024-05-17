import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Instagram, Map } from "iconoir-react";

import { useIntersectionObserver } from "@modules/landing/hooks";

import { MediaLinkList, Navigation } from "@modules/landing/components";

import styles from "./landingPageLayout.module.css";
import { LogoLanding } from "@assets/images";

const LandingPageLayout = (): JSX.Element => {
  const { sectionsRef } = useIntersectionObserver();

  useEffect(() => {
    window.location.href = "#home";
  }, []);

  return (
    <main className={styles.layoutContainer} ref={sectionsRef}>
      <Navigation />
      <MediaLinkList>
        {/* <MediaLinkList.Link
          Icon={Facebook}
          title="Facebook"
          href="#"
          external
        /> */}
        <MediaLinkList.Link
          Icon={Instagram}
          title="Instagram"
          href="https://www.instagram.com/cashmoneyrd?igsh=czk2bXRsbmR2Z2hv"
          external
        />
        {/* <MediaLinkList.Link
          Icon={Telegram}
          title="Instagram"
          href="#"
          external
        /> */}
      </MediaLinkList>
      <Outlet />
      <footer className={styles.footer}>
        <figure className={styles.figure}>
          <img
            className={styles.logo}
            src={LogoLanding}
            alt="Logo cashmoney"
            loading="lazy"
          />
          <span className="paragraph">Cash Money RD</span>
        </figure>
        <p className="paragraph">
          <Map />
          Calle Luis F. Thomen 110, Evaristo Morales, D.N.
        </p>
        <p className="paragraph">
          Cashmoneyrd.com Todos los derechos reservados ©
        </p>
      </footer>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </main>
  );
};

export default LandingPageLayout;

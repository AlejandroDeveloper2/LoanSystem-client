import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Facebook, Instagram, Map, Telegram } from "iconoir-react";

import { MediaLinkList, Navigation } from "@modules/landing/components";

import styles from "./landingPageLayout.module.css";
import { LogoLanding } from "@assets/images";

const LandingPageLayout = (): JSX.Element => {
  return (
    <main className={styles.layoutContainer}>
      <Navigation />
      <MediaLinkList>
        <MediaLinkList.Link
          Icon={Facebook}
          title="Facebook"
          href="#"
          external
        />
        <MediaLinkList.Link
          Icon={Instagram}
          title="Instagram"
          href="#"
          external
        />
        <MediaLinkList.Link
          Icon={Telegram}
          title="Instagram"
          href="#"
          external
        />
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

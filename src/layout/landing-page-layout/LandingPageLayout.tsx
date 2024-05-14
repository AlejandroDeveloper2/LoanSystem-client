import { Outlet } from "react-router-dom";
import { Facebook, Instagram, Telegram } from "iconoir-react";

import { MediaLinkList, Navigation } from "@modules/landing/components";

import styles from "./landingPageLayout.module.css";

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
    </main>
  );
};

export default LandingPageLayout;

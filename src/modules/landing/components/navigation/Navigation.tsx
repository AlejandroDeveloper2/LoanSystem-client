import { useLocation, useNavigate } from "react-router-dom";
import { MenuScale, Send } from "iconoir-react";

import { navLinks } from "@modules/landing/constants/navData";

import { useNav } from "@modules/landing/hooks";

import { IconButton } from "@modules/core/components";
import { LateralMenu } from "..";

import styles from "./Navigation.module.css";
import { LogoLanding } from "@assets/images";

const Navigation = (): JSX.Element => {
  const { isMenuVisible, toggleMenu } = useNav();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <LateralMenu isMenuVisible={isMenuVisible} />
      <nav className={styles.nav}>
        <img
          className={styles.logo}
          src={LogoLanding}
          alt="Logo cashmoney"
          loading="lazy"
        />
        <button id="btn-menu" className={styles.menu} onClick={toggleMenu}>
          <MenuScale />
          <span className="buttonText">Menú</span>
        </button>
        <ul className={styles.linkList}>
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.to}
              className={"buttonText" + " " + styles.link}
            >
              {link.label}
              <span
                className={
                  location.hash === link.to
                    ? styles.linkIndicatorActive
                    : styles.linkIndicator
                }
              ></span>
            </a>
          ))}
        </ul>
        <IconButton
          Icon={Send}
          label="Contáctanos"
          id="btn-contact"
          type="button"
          title="Ponte en contacto con nosotros"
          variant="primary"
          loading={false}
          onClick={() => {
            navigate("#contact");
          }}
        />
      </nav>
    </>
  );
};

export default Navigation;

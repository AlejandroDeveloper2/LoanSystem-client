import { LogIn, MenuScale, Send } from "iconoir-react";

import { navLinks } from "@modules/landing/constants/navData";

import { useNav } from "@modules/landing/hooks";

import { IconButton } from "@modules/core/components";
import { LateralMenu } from "..";

import styles from "./Navigation.module.css";
import { LogoLanding } from "@assets/images";
import { useNavigate } from "react-router-dom";

const Navigation = (): JSX.Element => {
  const { isMenuVisible, toggleMenu } = useNav();
  const navigate = useNavigate();

  return (
    <>
      <LateralMenu isMenuVisible={isMenuVisible} />
      <nav className={styles.nav} id="nav1">
        <a
          href="#home"
          aria-label="Descubra nuestro proposito principal en Cashmoney RD"
          className={"buttonText" + " " + styles.link}
          id="logo-link"
        >
          <img
            className={styles.logo}
            src={LogoLanding}
            alt="Logo cashmoney"
            loading="lazy"
          />
        </a>
        <button id="btn-menu" className={styles.menu} onClick={toggleMenu}>
          <MenuScale />
          <span className="buttonText">Menú</span>
        </button>
        <ul className={styles.linkList}>
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.to}
                aria-label={link.ariaLabel}
                className={"buttonText" + " " + styles.link}
              >
                {link.label}
                <span className={styles.linkIndicator}></span>
              </a>
            </li>
          ))}
        </ul>
        <menu className={styles.options}>
          <IconButton
            Icon={Send}
            label="Contáctanos"
            id="btn-contact"
            type="button"
            title="Ponte en contacto con nosotros"
            variant="primary"
            loading={false}
            onClick={() => {
              window.location.href = "#contact";
            }}
          />
          <IconButton
            Icon={LogIn}
            label="Iniciar sesión"
            id="btn-login"
            type="button"
            title="Iniciar Sesión"
            variant="neutral"
            loading={false}
            onClick={() => navigate("/login")}
          />
        </menu>
      </nav>
    </>
  );
};

export default Navigation;

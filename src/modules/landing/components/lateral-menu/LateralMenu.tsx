import { Link } from "react-router-dom";

import { navLinks } from "@modules/landing/constants/navData";
import { LateralMenuProps } from "@modules/landing/interfaces/component-interfaces/LateralMenuProps";

import styles from "./LateralMenu.module.css";
import stylesNav from "../navigation/Navigation.module.css";
import { LogoLanding } from "@assets/images";

const LateralMenu = ({ isMenuVisible }: LateralMenuProps): JSX.Element => {
  return (
    <nav
      className={isMenuVisible ? styles.lateralNav : styles.lateralNavInvisble}
      id="nav2"
    >
      <img
        className={styles.logo}
        src={LogoLanding}
        alt="Logo cashmoney"
        loading="lazy"
      />
      <ul className={styles.mobileLinkList}>
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className={"buttonText" + " " + stylesNav.link}
          >
            {link.label}
            <span className={stylesNav.linkIndicator}></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default LateralMenu;

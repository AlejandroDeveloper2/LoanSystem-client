import { Link } from "react-router-dom";

import { navLinks } from "@modules/landing/constants/navData";
import { LateralMenuProps } from "@modules/landing/interfaces/component-interfaces/LateralMenuProps";

import { Logo } from "@modules/core/components";

import styles from "./LateralMenu.module.css";
import stylesNav from "../navigation/Navigation.module.css";

const LateralMenu = ({ isMenuVisible }: LateralMenuProps): JSX.Element => {
  return (
    <nav
      className={isMenuVisible ? styles.lateralNav : styles.lateralNavInvisble}
    >
      <Logo />
      <ul className={styles.mobileLinkList}>
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className={"buttonText" + " " + stylesNav.link}
          >
            {link.label}
            <span
              className={
                location.hash === link.to
                  ? stylesNav.linkIndicatorActive
                  : stylesNav.linkIndicator
              }
            ></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default LateralMenu;

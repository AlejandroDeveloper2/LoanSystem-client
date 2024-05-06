import { Link, useLocation } from "react-router-dom";

import { setActiveNavItem } from "@modules/core/utils/helpers";

import { navItems } from "@modules/core/constants/navItems";

import styles from "./Navigation.module.css";

const Navigation = (): JSX.Element => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        {navItems.map((navItem, i) => (
          <li key={i}>
            <Link
              to={navItem.to}
              className={styles[setActiveNavItem(location, navItem.to)]}
            >
              <navItem.Icon />
            </Link>
            <strong className={styles.itemFloatingTag}>
              <span className="captionText">{navItem.title}</span>
            </strong>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

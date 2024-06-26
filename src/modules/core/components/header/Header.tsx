import { useNavigate } from "react-router-dom";
import { LogOut, Settings } from "iconoir-react";

import { useAuthStore } from "@modules/auth/state-store";

import { Avatar, IconOnlyButton, Logo } from "..";

import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className={styles.header}>
      <div className={styles.part}>
        <Logo />
        <Avatar />
      </div>
      <ul className={styles.controls}>
        <li>
          <IconOnlyButton
            Icon={Settings}
            id="btn_settings"
            type="button"
            title="Configuraciones"
            variant="outline"
            loading={false}
            onClick={() => navigate("/userPanel/userProfile")}
          />
        </li>
        <li>
          <IconOnlyButton
            Icon={LogOut}
            id="btn_logout"
            type="button"
            title="Cerrar sesión"
            variant="outline"
            loading={false}
            onClick={() => logout()}
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { User, UserCircle } from "iconoir-react";

import { useAuthStore } from "@modules/auth/state-store";
import { useUserStore } from "@modules/user/state-store";
import { useLoading } from "@modules/core/hooks";

import styles from "./Avatar.module.css";

const Avatar = (): JSX.Element => {
  const { auth } = useAuthStore();
  const { user, getUser } = useUserStore();

  const { toggleLoading } = useLoading();

  useEffect(() => {
    if (auth) getUser(auth.sub, toggleLoading);
  }, [auth]);

  return (
    <div className={styles.avatarContainer}>
      <figure className={styles.avatar}>
        <UserCircle />
      </figure>
      <ul className={styles.userInfoList}>
        <li>
          <span className="buttonText"> Bienvenido: </span>{" "}
          <p className="buttonText">{user ? user.firstName : ""}</p>
        </li>
        <li>
          <User />
          <p id="role-text" className="buttonText">
            {user ? user.roles : ""}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;

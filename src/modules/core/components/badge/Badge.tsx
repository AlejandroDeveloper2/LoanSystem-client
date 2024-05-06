import { BadgeProps } from "@modules/core/interfaces/components-interfaces/BadgeProps";

import styles from "./Badge.module.css";

const Badge = ({ label, variant }: BadgeProps): JSX.Element => {
  return (
    <div className={styles.badge + " " + styles[variant]}>
      <span id="badge-text" className="paragraph">
        {label}
      </span>
    </div>
  );
};

export default Badge;

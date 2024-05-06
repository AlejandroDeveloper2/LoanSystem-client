import { Link } from "react-router-dom";

import { CustomLinkProps } from "@modules/core/interfaces/components-interfaces/CustomLinkProps";

import styles from "./CustomLink.module.css";

const CustomLink = ({ label, linkText, to }: CustomLinkProps): JSX.Element => {
  return (
    <p className={"captionText" + "" + styles.customLinkStyle}>
      {label}
      <Link to={to} className={styles.link}>
        {linkText}
      </Link>
    </p>
  );
};

export default CustomLink;

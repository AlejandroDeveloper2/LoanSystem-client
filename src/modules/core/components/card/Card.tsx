import { useNavigate } from "react-router-dom";
import { Eye } from "iconoir-react";

import { CardProps } from "@modules/core/interfaces/components-interfaces/CardProps";

import { IconButton, Spinner } from "..";

import styles from "./Card.module.css";

const Card = ({
  title,
  value,
  moreDetailsLink,
  variant,
  captionText,
  Icon,
  loading,
  loadingMessage,
  onClick,
}: CardProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.cardContainer + " " + styles[variant]}>
      <figure className={styles.cardContent}>
        <Icon />
        <h2 className="buttonText">{title}</h2>
      </figure>
      {loading ? (
        <Spinner className="spinnerBarPrimary" message={loadingMessage} />
      ) : (
        <span className="heading1" id="card-text">
          {value}
        </span>
      )}
      <small className="captionText">{captionText}</small>
      {moreDetailsLink || onClick ? (
        <IconButton
          Icon={Eye}
          label="Ver más detalles"
          id="btn-more-details"
          type="button"
          title="Ver más detalles"
          variant="neutral"
          loading={false}
          onClick={
            moreDetailsLink
              ? () => navigate(moreDetailsLink)
              : onClick
              ? onClick
              : () => {}
          }
        />
      ) : null}
    </div>
  );
};

export default Card;

import { ArrowLeft, Hashtag } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import { InfoSectionProps } from "@modules/core/interfaces/components-interfaces/InfoSectionProps";

import { IconButton } from "..";

import styles from "./InfoSection.module.css";

const InfoSection = ({
  sectionTitle,
  labelId,
  link,
  recordId,
  buttonLabel,
}: InfoSectionProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className={styles.infoSection}>
      <div className={styles.sectionHead}>
        <h3 className="heading3">{sectionTitle}</h3>
        <IconButton
          Icon={ArrowLeft}
          label={buttonLabel ? buttonLabel : "Volver al listado"}
          id="btn-back-to-list"
          type="button"
          title="Volver al listado"
          variant="primary"
          loading={false}
          onClick={() => navigate(link)}
        />
      </div>
      <p>
        <Hashtag /> <span>{labelId}: </span> {recordId}{" "}
      </p>
    </section>
  );
};

export default InfoSection;

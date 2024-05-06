import { Eye, Upload } from "iconoir-react";

import {
  DocUploadingSectionProps,
  FileCardProps,
} from "@modules/core/interfaces/components-interfaces/DocUploadingSectionProps";

import { IconButton } from "..";

import styles from "./DocUploadingSection.module.css";

const DocUploadingSection = ({
  title,
  children,
}: DocUploadingSectionProps): JSX.Element => {
  return (
    <section className={styles.docUploadingSection}>
      <div className={styles.sectionHead}>
        <h3 className="heading3">{title}</h3>
      </div>
      <ul className={styles.docList}>{children}</ul>
    </section>
  );
};

const FileCard = ({
  docName,
  docTitle,
  buttonLabel,
  seeFunction,
  uploadModal,
}: FileCardProps): JSX.Element => {
  return (
    <li className={styles.card}>
      <h3 className="heading3">{docTitle}</h3>
      <span id="span-doc-name" className="captionText">
        {docName}
      </span>
      <IconButton
        Icon={Eye}
        label="Ver documento"
        id="btn-see-file"
        type="button"
        title="Visualizar documento"
        variant="primary"
        loading={false}
        onClick={seeFunction}
      />
      <IconButton
        Icon={Upload}
        label={buttonLabel}
        id="btn-upload-file"
        type="button"
        title={buttonLabel}
        variant="neutral"
        loading={false}
        onClick={uploadModal}
      />
    </li>
  );
};

DocUploadingSection.FileCard = FileCard;

export default DocUploadingSection;

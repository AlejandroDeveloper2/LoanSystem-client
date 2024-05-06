import { Xmark } from "iconoir-react";

import { ModalProps } from "@modules/core/interfaces/components-interfaces/ModalProps";

import styles from "./Modal.module.css";

const Modal = ({
  children,
  modalTitle,
  isModalVisible,
  toggleModal,
}: ModalProps): JSX.Element => {
  return (
    <div
      className={
        isModalVisible ? styles.overlayVisible : styles.overlayInvisible
      }
    >
      <dialog className={isModalVisible ? styles.visible : styles.invisible}>
        <header className={styles.modalHead}>
          <h2 className="heading2">{modalTitle}</h2>
          <Xmark onClick={toggleModal} />
        </header>
        <section className={styles.modalBody}>{children}</section>
      </dialog>
    </div>
  );
};

export default Modal;

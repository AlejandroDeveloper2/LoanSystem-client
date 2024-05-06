import { useState } from "react";

import { ModalWindowProps } from "../interfaces/components-interfaces/ModalProps";

import { Modal } from "../components";

const useModal = (modalTitle: string) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [elementId, setElementId] = useState<string | undefined>();

  const toggleModal = (elementIdParam?: string): void => {
    setIsModalVisible(!isModalVisible);
    setElementId(elementIdParam);
  };

  const ModalWindow = ({ children }: ModalWindowProps): JSX.Element => {
    return (
      <Modal
        modalTitle={modalTitle}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      >
        {children}
      </Modal>
    );
  };

  return {
    isModalVisible,
    elementId,
    ModalWindow,
    toggleModal,
  };
};

export default useModal;

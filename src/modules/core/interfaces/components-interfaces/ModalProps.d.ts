export interface ModalProps {
  children: React.ReactNode | React.ReactNode[];
  modalTitle: string;
  isModalVisible: boolean;
  toggleModal: () => void;
}
export interface ModalWindowProps {
  children: React.ReactNode | React.ReactNode[];
}

import { ClientDocType } from "../data-interfaces";

export interface UploadDocFormProps {
  clientId: string;
  clientDocUrl: string | null;
  fileType: ClientDocType;
  fileName: string;
  toggleModal: () => void;
}

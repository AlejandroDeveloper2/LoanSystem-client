import { PromissoryNoteType } from "../data-interfaces";

export interface UploadDocFormProps {
  loanId: string;
  promissoryNoteUrl: string | null;
  fileType: PromissoryNoteType;
  fileName: string;
  toggleModal: () => void;
}

import { PromissoryNoteType } from "../interfaces/data-interfaces";

import { useModal } from "@modules/core/hooks";
import { useLoanStore } from "../state-store";

import { UploadDocForm } from "../components";

const useUploadPromissory = () => {
  const { loan } = useLoanStore();

  const {
    elementId: docType,
    ModalWindow: ModalUploadDoc,
    toggleModal: toggleUploadDoc,
  } = useModal("Subir pagaré firmado");

  const ModalUploadPromissory = (): JSX.Element => {
    const getFileName = (): string | null => {
      if ((docType as PromissoryNoteType) === "simple") return "Pagaré simple";
      if ((docType as PromissoryNoteType) === "notarial") {
        return "Pagaré notarial";
      }

      return "Poder especial";
    };

    const getLoanPromissory = (): string | null => {
      if ((docType as PromissoryNoteType) === "simple")
        return loan?.simplePromissoryNote;
      if ((docType as PromissoryNoteType) === "notarial") {
        return loan?.notarialPromissoryNote;
      }

      return loan?.specialPower;
    };

    const fileName = getFileName();

    return (
      <ModalUploadDoc>
        <UploadDocForm
          loanId={loan?.id}
          promissoryNoteUrl={getLoanPromissory()}
          fileType={docType as PromissoryNoteType}
          fileName={`${fileName}-${loan?.client?.fullName}.pdf`}
          toggleModal={toggleUploadDoc}
        />
      </ModalUploadDoc>
    );
  };

  return {
    toggleUploadDoc,
    ModalUploadPromissory,
  };
};

export default useUploadPromissory;

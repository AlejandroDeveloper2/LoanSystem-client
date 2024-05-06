import { ClientDocType } from "../interfaces/data-interfaces";

import { useModal } from "@modules/core/hooks";
import { useClientsStore } from "../state-store";

import { UploadDocForm } from "../components";

const useUploadClientDoc = () => {
  const { client } = useClientsStore();

  const {
    elementId: docType,
    ModalWindow: ModalUploadDoc,
    toggleModal: toggleUploadDoc,
  } = useModal("Subir documentación");

  const ModalUploadClientDoc = (): JSX.Element => {
    const getFileName = (): string | null => {
      if ((docType as ClientDocType) === "identificationCard") return "Cédula";
      if ((docType as ClientDocType) === "jobLetter") {
        return "Carta de trabajo";
      }

      return "Estados de cuenta Nómina";
    };

    const getClientDoc = (): string | null => {
      if ((docType as ClientDocType) === "identificationCard")
        return `${client?.identificationCard}`;
      if ((docType as ClientDocType) === "jobLetter") {
        return `${client?.jobLetter}`;
      }

      return `${client?.payrollStatements}`;
    };

    const fileName = getFileName();

    return (
      <ModalUploadDoc>
        <UploadDocForm
          clientId={`${client?.id}`}
          clientDocUrl={getClientDoc()}
          fileType={docType as ClientDocType}
          fileName={`${fileName}-${client?.fullName}.pdf`}
          toggleModal={toggleUploadDoc}
        />
      </ModalUploadDoc>
    );
  };

  return {
    toggleUploadDoc,
    ModalUploadClientDoc,
  };
};

export default useUploadClientDoc;

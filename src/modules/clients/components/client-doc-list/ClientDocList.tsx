import { toast } from "react-toastify";

import { useUploadClientDoc } from "@modules/clients/hooks";
import {
  useIdentificationCardDoc,
  useJobLetterDoc,
} from "@modules/clients/hooks";
import { useClientsStore } from "@modules/clients/state-store";

import { DocUploadingSection } from "@modules/core/components";

const ClientDocList = (): JSX.Element => {
  const { client } = useClientsStore();

  const { toggleIdCard, ModalIdCardWindow } = useIdentificationCardDoc();
  const { toggleJobLetter, ModalJobLetterWindow } = useJobLetterDoc();
  const { toggleUploadDoc, ModalUploadClientDoc } = useUploadClientDoc();

  return (
    <>
      <ModalUploadClientDoc />
      <ModalIdCardWindow />
      <ModalJobLetterWindow />
      <DocUploadingSection title="Documentación del cliente">
        <DocUploadingSection.FileCard
          docName={
            client?.identificationCard
              ? `Cedula-${client?.fullName}.pdf`
              : `No se ha subido ningún documento`
          }
          docTitle="Cédula"
          buttonLabel={
            client?.identificationCard !== null
              ? "Actualizar documento"
              : "Subir documento"
          }
          seeFunction={() => {
            if (client?.identificationCard) toggleIdCard();
            else toast.warning("¡No has subido ningún documento!");
          }}
          uploadModal={() => {
            toggleUploadDoc("identificationCard");
          }}
        />
        <DocUploadingSection.FileCard
          docName={
            client?.jobLetter
              ? `Carta de trabajo-${client?.fullName}.pdf`
              : `No se ha subido ningún documento`
          }
          docTitle="Carta de trabajo"
          buttonLabel={
            client?.jobLetter ? "Actualizar documento" : "Subir documento"
          }
          seeFunction={() => {
            if (client?.jobLetter) toggleJobLetter();
            else toast.warning("¡No has subido ningún documento!");
          }}
          uploadModal={() => {
            toggleUploadDoc("jobLetter");
          }}
        />
        <DocUploadingSection.FileCard
          docName={
            client?.payrollStatements
              ? `Estados de cuenta Nómina-${client?.fullName}.pdf`
              : `No se ha subido ningún documento`
          }
          docTitle="Estados de cuenta Nómina"
          buttonLabel={
            client?.payrollStatements
              ? "Actualizar documento"
              : "Subir documento"
          }
          seeFunction={() => {}}
          uploadModal={() => {}}
        />
      </DocUploadingSection>
    </>
  );
};

export default ClientDocList;

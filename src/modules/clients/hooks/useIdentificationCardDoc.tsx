import { useModal } from "@modules/core/hooks";

import { ExternalDocVisualizer } from "@modules/core/components";
import { useClientsStore } from "../state-store";
import { downloadPDFDoc } from "@modules/core/utils/helpers";
import { ClientsService } from "../services/Clients.service";

const clientService = new ClientsService();

const downloadDoc = async (
  identificationCard: string | null,
  clientName: string
): Promise<void> => {
  if (identificationCard) {
    const identificationCardDoc = await clientService.getClientDoc(
      identificationCard
    );
    downloadPDFDoc(identificationCardDoc, `Cédula-${clientName}`);
  }
};

const useIdentificationCardDoc = () => {
  const { client } = useClientsStore();

  const { ModalWindow: ModalIdCard, toggleModal: toggleIdCard } =
    useModal("Cédula");

  const ModalIdCardWindow = (): JSX.Element => {
    return (
      <ModalIdCard>
        {client?.identificationCard ? (
          <ExternalDocVisualizer
            docUrl={client?.identificationCard}
            downloadFunction={() => {
              () =>
                downloadDoc(client?.identificationCard, `${client?.fullName}`);
            }}
            loading={false}
            labelButton="Descargar documento"
            titleButton="Descargar documento"
          />
        ) : null}
      </ModalIdCard>
    );
  };

  return { toggleIdCard, ModalIdCardWindow };
};
export default useIdentificationCardDoc;

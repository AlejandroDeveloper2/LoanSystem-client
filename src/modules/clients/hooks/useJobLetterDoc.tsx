import { downloadPDFDoc } from "@modules/core/utils/helpers";
import { ClientsService } from "../services/Clients.service";
import { useClientsStore } from "../state-store";
import { useModal } from "@modules/core/hooks";
import { ExternalDocVisualizer } from "@modules/core/components";

const clientService = new ClientsService();

const downloadDoc = async (
  jobLetter: string | null,
  clientName: string
): Promise<void> => {
  if (jobLetter) {
    const jobLetterDoc = await clientService.getClientDoc(jobLetter);
    downloadPDFDoc(jobLetterDoc, `Carta de trabajo-${clientName}`);
  }
};

const useJobLetter = () => {
  const { client } = useClientsStore();

  const { ModalWindow: ModalJobLetter, toggleModal: toggleJobLetter } =
    useModal("Carta de trabajo");

  const ModalJobLetterWindow = (): JSX.Element => {
    return (
      <ModalJobLetter>
        {client?.jobLetter ? (
          <ExternalDocVisualizer
            docUrl={client?.jobLetter}
            downloadFunction={() => {
              () => downloadDoc(client?.jobLetter, `${client?.fullName}`);
            }}
            loading={false}
            labelButton="Descargar documento"
            titleButton="Descargar documento"
          />
        ) : null}
      </ModalJobLetter>
    );
  };

  return { toggleJobLetter, ModalJobLetterWindow };
};

export default useJobLetter;

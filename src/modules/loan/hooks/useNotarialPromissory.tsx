import { useModal } from "@modules/core/hooks";
import { useLoanStore } from "@modules/loan/state-store";
import { useClientsStore } from "@modules/clients/state-store";
import { PromissoryNoteService } from "../services/PromissoryNote.service";
import { downloadPDFDoc } from "@modules/core/utils/helpers";

import { ExternalDocVisualizer, PDFVisualizer } from "@modules/core/components";
import { NotarialPromissoryNote } from "../pdfs";

const promissoryNoteService = new PromissoryNoteService();

const downloadSignedPromissory = async (
  promissoryNoteUrl: string | null,
  clientName: string
): Promise<void> => {
  if (promissoryNoteUrl) {
    const signedPromissory =
      await promissoryNoteService.getSignedPromissoryNote(promissoryNoteUrl);
    downloadPDFDoc(signedPromissory, `Pagaré notarial ${clientName}`);
  }
};

const useNotarialPromissory = () => {
  const { loan } = useLoanStore();
  const { client } = useClientsStore();

  const {
    ModalWindow: ModalNotarialPromissory,
    toggleModal: toggleNotarialPromissory,
  } = useModal("Pagaré notarial");

  const ModalNotarialPromissoryNote = (): JSX.Element => {
    return (
      <ModalNotarialPromissory>
        {loan.notarialPromissoryNote !== null ? (
          <ExternalDocVisualizer
            docUrl={loan?.notarialPromissoryNote}
            downloadFunction={() => {
              () =>
                downloadSignedPromissory(
                  loan.notarialPromissoryNote,
                  `${loan?.client?.fullName}`
                );
            }}
            loading={false}
            labelButton="Descargar pagaré notarial"
            titleButton="Descargar pagaré notarial firmado"
          />
        ) : (
          <PDFVisualizer
            renderDocument={() => (
              <NotarialPromissoryNote loan={loan} client={client} />
            )}
            buttonLabel="Descargar documento "
            buttonTitle="Descargar pagaré notarial"
            fileName={`Pagaré notarial ${loan?.client?.fullName}`}
          />
        )}
      </ModalNotarialPromissory>
    );
  };

  return {
    toggleNotarialPromissory,
    ModalNotarialPromissoryNote,
  };
};

export default useNotarialPromissory;

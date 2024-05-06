import { useModal } from "@modules/core/hooks";
import { useLoanStore } from "@modules/loan/state-store";
import { useClientsStore } from "@modules/clients/state-store";

import { PromissoryNoteService } from "@modules/loan/services/PromissoryNote.service";
import { downloadPDFDoc } from "@modules/core/utils/helpers";

import { ExternalDocVisualizer, PDFVisualizer } from "@modules/core/components";
import { SimplePromissoryNote } from "../pdfs";

const promissoryNoteService = new PromissoryNoteService();

const downloadSignedPromissory = async (
  promissoryNoteUrl: string | null,
  clientName: string
): Promise<void> => {
  if (promissoryNoteUrl) {
    const signedPromissory =
      await promissoryNoteService.getSignedPromissoryNote(promissoryNoteUrl);
    downloadPDFDoc(signedPromissory, `Pagaré simple ${clientName}`);
  }
};

const useSimplePromissory = () => {
  const { loan } = useLoanStore();
  const { client } = useClientsStore();

  const {
    ModalWindow: ModalSimplePromissory,
    toggleModal: toggleSimplePromissory,
  } = useModal("Pagaré simple");

  const ModalSimplePromissoryNote = (): JSX.Element => {
    return (
      <ModalSimplePromissory>
        {loan.simplePromissoryNote ? (
          <ExternalDocVisualizer
            docUrl={loan.simplePromissoryNote}
            downloadFunction={() =>
              downloadSignedPromissory(
                loan?.simplePromissoryNote,
                `${loan?.client?.fullName}`
              )
            }
            loading={false}
            labelButton="Descargar pagaré simple"
            titleButton="Descargar pagaré simple firmado"
          />
        ) : (
          <PDFVisualizer
            renderDocument={() => (
              <SimplePromissoryNote loan={loan} client={client} />
            )}
            buttonLabel="Descargar documento"
            buttonTitle={"Descargar pagaré simple"}
            fileName={`Pagaré simple ${loan?.client?.fullName}`}
          />
        )}
      </ModalSimplePromissory>
    );
  };

  return {
    toggleSimplePromissory,
    ModalSimplePromissoryNote,
  };
};
export default useSimplePromissory;

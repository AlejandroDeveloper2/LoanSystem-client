import { useModal } from "@modules/core/hooks";
import { useLoanStore } from "@modules/loan/state-store";
import { PromissoryNoteService } from "../services/PromissoryNote.service";
import { downloadPDFDoc } from "@modules/core/utils/helpers";

import { ExternalDocVisualizer, PDFVisualizer } from "@modules/core/components";
import { SpecialPromissoryNote } from "../pdfs";

const promissoryNoteService = new PromissoryNoteService();

const downloadSignedPromissory = async (
  promissoryNoteUrl: string | null,
  clientName: string
): Promise<void> => {
  if (promissoryNoteUrl) {
    const signedPromissory =
      await promissoryNoteService.getSignedPromissoryNote(promissoryNoteUrl);
    downloadPDFDoc(signedPromissory, `Poder especial ${clientName}`);
  }
};

const useSpecialPromissory = () => {
  const { loan } = useLoanStore();

  const {
    ModalWindow: ModalSpecialPromissory,
    toggleModal: toggleSpecialPromissory,
  } = useModal("Poder especial");

  const ModalSpecialPromissoryNote = (): JSX.Element => {
    return (
      <ModalSpecialPromissory>
        {loan.specialPower ? (
          <ExternalDocVisualizer
            docUrl={loan?.specialPower}
            downloadFunction={() => {
              () =>
                downloadSignedPromissory(
                  loan?.specialPower,
                  `${loan?.client?.fullName}`
                );
            }}
            loading={false}
            labelButton="Descargar poder especial"
            titleButton="Descargar poder especial firmado"
          />
        ) : (
          <PDFVisualizer
            renderDocument={() => (
              <SpecialPromissoryNote
                createdAt={loan?.createdAt}
                client={loan?.client}
              />
            )}
            buttonLabel="Descargar documento"
            buttonTitle="Descargar poder especial"
            fileName={`Poder especial ${loan?.client?.fullName}`}
          />
        )}
      </ModalSpecialPromissory>
    );
  };

  return {
    toggleSpecialPromissory,
    ModalSpecialPromissoryNote,
  };
};

export default useSpecialPromissory;

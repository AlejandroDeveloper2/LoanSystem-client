import { useLoanStore } from "@modules/loan/state-store";
import {
  useNotarialPromissory,
  useSimplePromissory,
  useSpecialPromissory,
  useUploadPromissory,
} from "@modules/loan/hooks";

import { DocUploadingSection } from "@modules/core/components";

const PromissoryNoteList = (): JSX.Element => {
  const { loan } = useLoanStore();

  const { toggleSimplePromissory, ModalSimplePromissoryNote } =
    useSimplePromissory();
  const { toggleNotarialPromissory, ModalNotarialPromissoryNote } =
    useNotarialPromissory();
  const { toggleSpecialPromissory, ModalSpecialPromissoryNote } =
    useSpecialPromissory();
  const { toggleUploadDoc, ModalUploadPromissory } = useUploadPromissory();

  return (
    <>
      <ModalSimplePromissoryNote />
      <ModalNotarialPromissoryNote />
      <ModalSpecialPromissoryNote />
      <ModalUploadPromissory />

      <DocUploadingSection title="Pagares">
        <DocUploadingSection.FileCard
          docName={
            loan?.simplePromissoryNote
              ? `Pagaré simple ${loan?.client?.fullName}.pdf`
              : `Pagaré simple ${loan?.client?.fullName}(sin firmar).pdf`
          }
          docTitle="Pagaré simple"
          buttonLabel={
            loan.simplePromissoryNote
              ? "Actualizar documento"
              : "Subir pagaré firmado"
          }
          seeFunction={() => toggleSimplePromissory()}
          uploadModal={() => {
            toggleUploadDoc("simple");
          }}
        />
        <DocUploadingSection.FileCard
          docName={
            loan?.notarialPromissoryNote
              ? `Pagaré Notarial ${loan?.client?.fullName}.pdf`
              : `Pagaré Notarial ${loan?.client?.fullName}(sin firmar).pdf`
          }
          docTitle="Pagaré Notarial"
          buttonLabel={
            loan.notarialPromissoryNote
              ? "Actualizar documento"
              : "Subir pagaré firmado"
          }
          seeFunction={() => toggleNotarialPromissory()}
          uploadModal={() => {
            toggleUploadDoc("notarial");
          }}
        />
        <DocUploadingSection.FileCard
          docName={
            loan?.specialPower
              ? `Poder especial ${loan?.client?.fullName}.pdf`
              : `Poder especial ${loan?.client?.fullName}(sin firmar).pdf`
          }
          docTitle="Poder especial"
          buttonLabel={
            loan?.specialPower ? "Actualizar documento" : "Subir pagaré firmado"
          }
          seeFunction={() => toggleSpecialPromissory()}
          uploadModal={() => {
            toggleUploadDoc("special");
          }}
        />
      </DocUploadingSection>
    </>
  );
};

export default PromissoryNoteList;

import { StateCreator } from "zustand";
import { toast } from "react-toastify";

import {
  AnnotationSlice,
  LoanSlice,
  PaymentScheduleSlice,
  PromissoryNoteSlice,
} from "@modules/loan/interfaces/store-interfaces";
import { PromissoryNoteType } from "@modules/loan/interfaces/data-interfaces";
import { ResponseGlobal } from "@modules/core/interfaces/data-interfaces";

import { PromissoryNoteService } from "@modules/loan/services/PromissoryNote.service";
import { getUpdateLoan } from "@modules/loan/utils/helpers";

const promissoryNoteService = new PromissoryNoteService();

const createPromissoryNoteStoreSlice: StateCreator<
  LoanSlice & PaymentScheduleSlice & PromissoryNoteSlice & AnnotationSlice,
  [],
  [],
  PromissoryNoteSlice
> = (set, get) => ({
  uploadPromissoryNote: async (
    loanId: string,
    document: Blob,
    fileType: PromissoryNoteType,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Subiendo documento...", true);
      const formData = new FormData();
      formData.append("file", document);
      formData.append("fileType", fileType);

      const { body: documentUrl }: ResponseGlobal<string> =
        await promissoryNoteService.uploadPromissoryNote(
          token,
          loanId,
          formData
        );
      const resDocument: Blob =
        await promissoryNoteService.getSignedPromissoryNote(documentUrl);

      const hrefDocument = URL.createObjectURL(resDocument);

      set({
        loan: getUpdateLoan(get().loan, fileType, hrefDocument),
      });
      toast.success("¡Documento cargado con exito!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al subir el documento!");
    } finally {
      toggleLoading("", false);
    }
  },

  updatePromissoryNote: async (
    loanId: string,
    document: Blob,
    fileType: PromissoryNoteType,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Actualizando documento...", true);
      const formData = new FormData();
      formData.append("file", document);
      formData.append("fileType", fileType);

      const { body: documentUrl }: ResponseGlobal<string> =
        await promissoryNoteService.updatePromissoryNote(
          token,
          loanId,
          formData
        );
      const resDocument: Blob =
        await promissoryNoteService.getSignedPromissoryNote(documentUrl);

      const hrefDocument = URL.createObjectURL(resDocument);

      set({
        loan: getUpdateLoan(get().loan, fileType, hrefDocument),
      });
      toast.success("¡Documento actualizado con exito!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al actualizar el documento!");
    } finally {
      toggleLoading("", false);
    }
  },
});

export default createPromissoryNoteStoreSlice;

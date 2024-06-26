import { create } from "zustand";
import { toast } from "react-toastify";

import { SendEmailStore } from "../interfaces/store-interfaces";
import { ApplicationFormData } from "../interfaces/data-interfaces";

import { SendEmailService } from "../services/SendEmail.service";

const sendEmailService = new SendEmailService();

const useSendEmailStore = create<SendEmailStore>(() => ({
  sendEmail: async (
    formParams: ApplicationFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    try {
      toggleLoading("Enviando email...", true);
      await sendEmailService.sendEmail(formParams);
      toast.success("¡Mensaje enviado con exito, Espere a ser contactado!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al enviar aplicación!");
    } finally {
      toggleLoading("", false);
    }
  },
}));

export default useSendEmailStore;

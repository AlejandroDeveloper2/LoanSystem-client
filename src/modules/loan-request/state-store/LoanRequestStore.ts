import { create } from "zustand";
import { toast } from "react-toastify";

import { LoanRequestStore } from "@modules/loan-request/interfaces/store-interfaces";
import { ServerResponse } from "@modules/core/interfaces/data-interfaces";

import { LoanRequestService } from "@modules/loan-request/services/LoanRequest.service";
import { RequestFormData } from "@modules/loan-request/interfaces/data-interfaces";

const loanRequestService = new LoanRequestService();

const useLoanRequestStore = create<LoanRequestStore>((set) => ({
  clientExists: false,
  validateClient: async (
    identification: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    try {
      toggleLoading("Validando cliente...", true);
      const { body } = await loanRequestService.validateClient(identification);
      set({ clientExists: body });
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      toast.error(parsedError.message);
    } finally {
      toggleLoading("", false);
    }
  },
  createLoanRequest: async (
    requestData: RequestFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    try {
      toggleLoading("Enviando información...", true);
      await loanRequestService.createLoanRequest(requestData);
      toast.success(
        "Su solicitud ha sido enviada, será contactado via correo en las próximas 48 horas."
      );
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      console.log(parsedError.message);
      toast.error("Ha ocurrido un error al enviar la solicitud!");
    } finally {
      toggleLoading("", false);
    }
  },
}));

export default useLoanRequestStore;

import { StateCreator } from "zustand";
import { toast } from "react-toastify";

import { paymentIndicators } from "@modules/loan/constants/storeInitialValues";

import {
  AnnotationSlice,
  LoanSlice,
  PaymentScheduleSlice,
  PromissoryNoteSlice,
} from "@modules/loan/interfaces/store-interfaces";
import {
  ApproveLoanDataForm,
  PartialPaymentDataForm,
  PaymentIndicator,
  PaymentSchedule,
} from "@modules/loan/interfaces/data-interfaces";
import {
  ResponseGlobal,
  TableResponse,
} from "@modules/core/interfaces/data-interfaces";

import { PaymentScheduleService } from "@modules/loan/services/PaymentSchedule.service";

const paymentScheduleService = new PaymentScheduleService();

const createPaymentStoreSlice: StateCreator<
  LoanSlice & PaymentScheduleSlice & PromissoryNoteSlice & AnnotationSlice,
  [],
  [],
  PaymentScheduleSlice
> = (set, get) => ({
  ticketUrl: "",
  paymentIndicators,
  generatePaymentSchedule: async (
    loanData: ApproveLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Generando calendario de pagos...", true);
      const { body: paymentSchedules }: TableResponse<PaymentSchedule> =
        await paymentScheduleService.generatePaymentSchedule(token, loanData);
      set(({ loan }) => ({
        loan: {
          ...loan,
          ...loanData,
          paymentSchedules,
        },
      }));
      toast.success("¡Calendario de pagos generado correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al generar calendario de pagos!");
    } finally {
      toggleLoading("", false);
    }
  },
  payLoanQuota: async (
    paymentId: string,
    loanId: string,
    payment: PartialPaymentDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Pagando cuota...", true);
      await paymentScheduleService.payLoanQuota(token, paymentId, payment);
      await get().getLoan(loanId, toggleLoading);
      toast.success("¡Cuota pagada exitosamente!");
    } catch (e: unknown) {
      toast.error(
        "¡Ha ocurrido un error al pagar la cuota " +
          "por algunos de estos motivos: " +
          "Estas intentando realizar el último pago de forma parcial " +
          "o ha ocurrido un error interno en el servidor!"
      );
    } finally {
      toggleLoading("", false);
    }
  },
  getPaymentTicket: async (
    loanId: string,
    paymentId: string,
    mode: "Visualize" | "Download",
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Generando ticket...", true);
      const ticket: Blob = await paymentScheduleService.getPaymentTicket(
        token,
        loanId,
        paymentId
      );
      const href = URL.createObjectURL(ticket);
      set({ ticketUrl: href });

      if (mode === "Download") {
        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", "ticket.pdf");
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        //URL.revokeObjectURL(href);
        toast.success("Ticket generado con exito!");
      }
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al generar el ticket!");
    } finally {
      toggleLoading("", false);
    }
  },
  getPaymentIndicators: async (
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando indicadores...", true);
      const { body: paymentIndicators }: ResponseGlobal<PaymentIndicator> =
        await paymentScheduleService.getPaymentIndicators(token);
      set({ paymentIndicators });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al obtener los indicadores!");
    } finally {
      toggleLoading("", false);
    }
  },
});

export default createPaymentStoreSlice;

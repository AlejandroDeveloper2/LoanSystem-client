import { StateCreator } from "zustand";
import { toast } from "react-toastify";

import {
  loanIndicators,
  pagination,
  loan,
} from "@modules/loan/constants/storeInitialValues";

import {
  LoanSlice,
  PaymentScheduleSlice,
  PromissoryNoteSlice,
  AnnotationSlice,
} from "@modules/loan/interfaces/store-interfaces";
import {
  ApproveLoanDataForm,
  Loan,
  LoanDataForm,
  LoanFilters,
  LoanIndicator,
} from "@modules/loan/interfaces/data-interfaces";
import {
  ResponseGlobal,
  TableResponse,
} from "@modules/core/interfaces/data-interfaces";

import { LoanService } from "@modules/loan/services/Loan.service";

const loanService = new LoanService();

const createLoanStoreSlice: StateCreator<
  LoanSlice & PaymentScheduleSlice & PromissoryNoteSlice & AnnotationSlice,
  [],
  [],
  LoanSlice
> = (set, get) => ({
  loans: [],
  loan,
  pagination,
  loanIndicators,

  getAllLoans: async (
    page: number,
    limit: string,
    searchValue: string,
    loanFilters: LoanFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando préstamos...", true);
      const { body: loans, pagination }: TableResponse<Loan> =
        await loanService.getAllLoans(
          token,
          page,
          limit,
          searchValue,
          loanFilters,
          filter
        );
      const updatedLoans: Loan[] = loans.map((loan) => ({
        ...loan,
        numberOfPayments: `${loan.numberOfPayments}/${loan.numberOfQuotas}`,
        amountInterest: loan.amount + loan.earnings,
      }));

      set({ loans: updatedLoans, pagination: { ...pagination, limit } });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar los préstamos!");
    } finally {
      toggleLoading("", false);
    }
  },
  getLoan: async (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando préstamo...", true);
      const { body: updatedloan }: ResponseGlobal<Loan> =
        await loanService.getLoan(token, loanId);
      set(() => ({
        loan: {
          ...updatedloan,
          amountInterest: updatedloan.amount + updatedloan.earnings,
        },
      }));
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al obtener el préstamo!");
    } finally {
      toggleLoading("", false);
    }
  },
  approveLoan: async (
    loanId: string,
    loanData: ApproveLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Aprobando préstamo..", true);
      const { body: updatedLoan }: ResponseGlobal<Loan> =
        await loanService.approveLoan(token, loanId, loanData);

      set({ loan: updatedLoan });

      const updatedLoans: Loan[] = get().loans.map((loan) => {
        if (loan.id === loanId)
          return {
            ...updatedLoan,
            numberOfPayments: `${loan.numberOfPayments}/${loan.numberOfQuotas}`,
            amountInterest: loan.amount + loan.earnings,
          };
        return loan;
      });

      set({ loans: updatedLoans });

      toast.success("¡Préstamo aprobado correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al aprobar el préstamo!");
    } finally {
      toggleLoading("", false);
    }
  },
  createLoan: async (
    loanData: LoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Creando préstamo...", true);
      const { body: newLoan }: ResponseGlobal<Loan> =
        await loanService.createLoan(token, loanData);

      const updatedLoan: Loan = {
        ...newLoan,
        numberOfPayments: `${newLoan.numberOfPayments}/${newLoan.numberOfQuotas}`,
        amountInterest: newLoan.amount + newLoan.earnings,
      };

      set(({ loans }) => ({
        loans: [...loans, updatedLoan],
      }));

      await get().getAllLoans(
        get().pagination.page,
        get().pagination.limit,
        "",
        {
          loanDate: "",
          paymentCycle: "",
        },
        "",
        toggleLoading
      );
      toast.success("¡El préstamo se ha creado exitosamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al crear el préstamo!");
    } finally {
      toggleLoading("", false);
    }
  },
  cancelLoan: async (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cancelando préstamo...", true);
      const { body: updatedLoan }: ResponseGlobal<Loan> =
        await loanService.cancelLoan(token, loanId);

      const updatedLoans: Loan[] = get().loans.map((loan) => {
        if (loan.id === loanId)
          return {
            ...updatedLoan,
            numberOfPayments: `${loan.numberOfPayments}/${loan.numberOfQuotas}`,
            amountInterest: loan.amount + loan.earnings,
          };
        return loan;
      });
      set({ loans: updatedLoans });
      toast.success("¡Préstamo cancelado!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al cancelar el préstamo!");
    } finally {
      toggleLoading("", false);
    }
  },
  deleteLoan: async (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Eliminando préstamo...", true);
      const { body: loanUuid }: ResponseGlobal<{ id: string }> =
        await loanService.deleteLoan(token, loanId);
      set(({ loans }) => ({
        loans: loans.filter((loan) => loan.id !== loanUuid.id),
      }));
      await get().getAllLoans(
        get().pagination.page,
        get().pagination.limit,
        "",
        {
          loanDate: "",
          paymentCycle: "",
        },
        "",
        toggleLoading
      );
      await get().getLoanIndicators(toggleLoading);
      toast.success("¡Préstamo eliminado!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al eliminar el préstamo!");
    } finally {
      toggleLoading("", false);
    }
  },

  getLoanIndicators: async (
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Obteniendo indicador...", true);
      const { body: loanIndicators }: ResponseGlobal<LoanIndicator> =
        await loanService.getLoanIndicators(token);
      set({ loanIndicators });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al cargar indicadores!");
    } finally {
      toggleLoading("", false);
    }
  },
});
export default createLoanStoreSlice;

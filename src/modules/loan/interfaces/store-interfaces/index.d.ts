import { Pagination } from "@modules/core/interfaces/data-interfaces";
import {
  Loan,
  LoanFilters,
  LoanDataForm,
  ApproveLoanDataForm,
  LoanIndicator,
  PaymentIndicator,
  PartialPaymentDataForm,
  PromissoryNoteType,
  Annotation,
  AnnotationFilters,
  AnnotationFormData,
} from "../data-interfaces";

interface LoanSlice {
  loans: Loan[];
  loan: Loan;
  loanIndicators: LoanIndicator;
  pagination: Pagination;
  getAllLoans: (
    page: number,
    limit: string,
    searchValue: string,
    loanFilters: LoanFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void,
    signal?: AbortSignal
  ) => Promise<void>;
  getLoan: (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  approveLoan: (
    loanId: string,
    loanData: ApproveLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  createLoan: (
    loanData: LoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  cancelLoan: (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  deleteLoan: (
    loanId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getLoanIndicators: (
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

interface PaymentScheduleSlice {
  ticketUrl: string;
  paymentIndicators: PaymentIndicator;
  generatePaymentSchedule: (
    loanData: ApproveLoanDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  payLoanQuota: (
    paymentId: string,
    loanId: string,
    payment: PartialPaymentDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getPaymentTicket: (
    loanId: string,
    paymentId: string,
    mode: "Visualize" | "Download",
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getPaymentIndicators: (
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

interface PromissoryNoteSlice {
  uploadPromissoryNote: (
    loanId: string,
    document: Blob,
    fileType: PromissoryNoteType,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  updatePromissoryNote: (
    loanId: string,
    document: Blob,
    fileType: PromissoryNoteType,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

interface AnnotationSlice {
  annotations: Annotation[];
  notePagination: Pagination;
  getAllAnnotations: (
    loanId: string,
    page: number,
    limit: string,
    searchValue: string,
    loanFilters: AnnotationFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void,
    signal?: AbortSignal
  ) => Promise<void>;
  createAnnotation: (
    loanId: string,
    annotation: AnnotationFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  updateAnnotation: (
    annotationId: string,
    loanId: string,
    updatedAnnotation: AnnotationFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  deleteAnnotation: (
    annotationId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

export type {
  LoanSlice,
  PaymentScheduleSlice,
  PromissoryNoteSlice,
  AnnotationSlice,
};

import { Client } from "@modules/clients/interfaces/data-interfaces";

type LoanStateType = "Pendiente" | "Aprobado" | "Cancelado" | "Pagado";
type PaymentStatusType = "Pendiente" | "Pagado" | "Mora" | "Cancelado";
type PaymentType = "Semanal" | "Mensual" | "Quincenal";
type PromissoryNoteType = "simple" | "notarial" | "special";

interface LoanDataForm {
  client: string;
  amount: number;
  paymentCycle: PaymentType;
  deadline: number;
}

interface ApproveLoanDataForm {
  amount: number;
  paymentCycle: PaymentType;
  deadline: number;
  interest: number;
  firstPaymentDate: string;
  numberOfQuotas: number;
}

interface PartialPaymentDataForm {
  balance: number;
  isFullPayment: boolean;
}

interface AnnotationFormData {
  title: string;
  description: string;
}

interface UploadDocFormData {
  promissoryNote: Blob | string;
  fileType: PromissoryNoteType;
}

interface PaymentSchedule {
  id: string;
  paymentDate: string;
  amount: number;
  quotaNumber: number;
  paymentCycle: PaymentType;
  paymentStatus: string;
  paymentReference: string;
  loan: Loan;
  balancePaid: number;
  outstandingBalance: number;
}

interface Loan {
  id: string;
  createdAt: string;
  amount: number;
  paymentCycle: PaymentType;
  deadline: number;
  client: Client;
  loanState: LoanStateType;
  interest: number;
  earnings: number;
  firstPaymentDate: string;
  paymentSchedules: PaymentSchedule[];
  numberOfPayments: string;
  numberOfQuotas: number;
  amountInterest: number;
  isFullPayment: boolean;
  balance: number;
  simplePromissoryNote: string | null;
  notarialPromissoryNote: string | null;
  specialPower: string | null;
}

interface LoanFilters {
  loanDate: string;
  paymentCycle: PaymentType | string;
}

interface LoanIndicator {
  totalInvestedCapital: number;
  investedCapital: number;
  totalActiveLoans: number;
  activeLoans: number;
  totalLoansPaid: number;
  loansPaid: number;
  earnings: number;
}

interface PaymentIndicator {
  totalBalance: number;
  raisedMoney: number;
  paymentsMade: number;
  overduePayments: number;
}

interface Annotation extends AnnotationFormData {
  id: string;
  loanId: string;
}

interface AnnotationFilters {
  startDate: string;
  endDate: string;
}

export type {
  LoanStateType,
  PaymentStatusType,
  PaymentType,
  PromissoryNoteType,
  LoanDataForm,
  ApproveLoanDataForm,
  PartialPaymentDataForm,
  AnnotationFormData,
  UploadDocFormData,
  PaymentSchedule,
  Loan,
  LoanFilters,
  LoanIndicator,
  PaymentIndicator,
  Annotation,
  AnnotationFilters,
};

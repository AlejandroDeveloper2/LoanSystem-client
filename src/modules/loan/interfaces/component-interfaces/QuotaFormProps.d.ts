import { Loan } from "../data-interfaces";

export interface QuotaFormProps {
  quotaId: string;
  quotaAmount: number;
  loan: Loan;
  toggleModal: () => void;
}

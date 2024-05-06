import { RequestFormData } from "@modules/loan-request/interfaces/data-interfaces";

export interface LoanRequestStore {
  clientExists: boolean;
  validateClient: (
    identification: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  createLoanRequest: (
    requestData: RequestFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

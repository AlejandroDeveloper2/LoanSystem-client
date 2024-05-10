import {
  GeneralIndicators,
  OperationalExpensesFormData,
} from "../data-interfaces";

export interface IndicatorsStore {
  generalIndicators: GeneralIndicators;
  operationalExpenses: number;
  getGeneralIndicators: (
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getOperationalExpenses: (
    formData: OperationalExpensesFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

import { GeneralIndicators } from "../data-interfaces";

export interface IndicatorsStore {
  generalIndicators: GeneralIndicators;
  getGeneralIndicators: (
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

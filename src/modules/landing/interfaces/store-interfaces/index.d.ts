import { ApplicationFormData } from "../data-interfaces";

export interface SendEmailStore {
  sendEmail: (
    formParams: ApplicationFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

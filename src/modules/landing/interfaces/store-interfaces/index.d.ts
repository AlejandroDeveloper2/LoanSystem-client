export interface SendEmailStore {
  sendEmail: (
    formRef: React.RefObject<HTMLFormElement>,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

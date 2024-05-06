export interface DialogProps {
  open: boolean;
  dialogMessage: string;
  acceptButtonLabel: string;
  elementId: string;
  action: (
    elementId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  toggleDialog: () => void;
}

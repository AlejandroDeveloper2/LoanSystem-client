interface PDFViewerProps {
  renderDocument: () => JSX.Element;
  buttonLabel: string;
  buttonTitle: string;
  fileName: string;
}

interface PDFExternalViewerProps {
  docUrl: string;
  loading: boolean;
  labelButton: string;
  titleButton: string;
  downloadFunction: () => void;
}

export type { PDFViewerProps, PDFExternalViewerProps };

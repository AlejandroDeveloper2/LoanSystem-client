interface DocUploadingSectionProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

interface FileCardProps {
  docTitle: string;
  docName: string;
  buttonLabel: string;
  seeFunction: () => void;
  uploadModal: () => void;
}

export type { DocUploadingSectionProps, FileCardProps };

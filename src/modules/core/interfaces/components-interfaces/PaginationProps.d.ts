interface PaginationConfig {
  totalRecords: number;
  firstShownRecord: number;
  lastShownRecord: number;
  next: () => void;
  back: () => void;
}

interface PaginationProps {
  paginationConfig: PaginationConfig;
}

export type { PaginationConfig, PaginationProps };

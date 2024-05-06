import { ChangeEvent } from "react";

import { PaginationConfig } from "@modules/core/interfaces/components-interfaces/PaginationProps";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";
import { Loan } from "../data-interfaces";

export interface LoanTableProps {
  loading: boolean;
  loadingMessage: string;
  recordsToList: string;
  searchValue: string | number;
  paginationConfig: PaginationConfig;
  getTableOptions: (loan: Loan) => IconOnlyButtonProps[];
  onRecordsToListChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onSearchValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

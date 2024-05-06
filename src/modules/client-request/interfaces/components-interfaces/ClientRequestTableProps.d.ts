import { ChangeEvent } from "react";

import { PaginationConfig } from "@modules/core/interfaces/components-interfaces/PaginationProps";
import { ParsedClientRequestData } from "@modules/client-request/interfaces/data-interfaces";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

export interface ClientRequestTableProps {
  loading: boolean;
  loadingMessage: string;
  recordsToList: string;
  searchValue: string | number;
  paginationConfig: PaginationConfig;
  getTableOptions: (request: ParsedClientRequestData) => IconOnlyButtonProps[];
  onRecordsToListChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onSearchValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

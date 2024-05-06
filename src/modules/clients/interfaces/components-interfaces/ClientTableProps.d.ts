import { ChangeEvent } from "react";

import { Client } from "../data-interfaces";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";
import { PaginationConfig } from "@modules/core/interfaces/components-interfaces/PaginationProps";

export interface ClientTableProps {
  loading: boolean;
  loadingMessage: string;
  searchValue: string;
  recordsToList: string;
  paginationConfig: PaginationConfig;
  getTableOptions: (client: Client) => IconOnlyButtonProps[];
  onSearchValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRecordsToListChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

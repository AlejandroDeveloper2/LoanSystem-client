import { ChangeEvent } from "react";

import { PaginationConfig } from "@modules/core/interfaces/components-interfaces/PaginationProps";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";
import { Annotation } from "../data-interfaces";

export interface AnnotationTableProps {
  loading: boolean;
  loadingMessage: string;
  recordsToList: string;
  searchValue: string | number;
  paginationConfig: PaginationConfig;
  toggleModal: () => void;
  getTableOptions: (annotation: Annotation) => IconOnlyButtonProps[];
  onRecordsToListChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onSearchValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

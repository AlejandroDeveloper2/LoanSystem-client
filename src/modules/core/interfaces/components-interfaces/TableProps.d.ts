import { ReactNode } from "react";

import { PaginationConfig } from "./PaginationProps";
import { IconOnlyButtonProps } from "./ButtonProps";

type MobileTableValueType = {
  label: string;
  value: string | number;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
};

type TableHeaderType = {
  label: string;
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>>>;
};

interface Columnkey {
  key: string;
  fieldType: "text" | "date" | "currency" | "subField";
  subKeys: string[];
  badgeValue: boolean;
}

interface CommonTableProps {
  children: ReactNode | ReactNode[];
  headers: TableHeaderType[];
  paginationConfig?: PaginationConfig;
}

interface MobileTableProps {
  children: ReactNode | ReactNode[];
  paginationConfig?: PaginationConfig;
}

interface MobileTableRecordProps {
  title: string;
  values: MobileTableValueType[];
  children?: ReactNode | ReactNode[];
}

interface RowProps {
  children: ReactNode | ReactNode[];
}

interface ColumnProps {
  value?: number | string;
  children?: ReactNode | ReactNode[];
}

interface TableToolsProps {
  recordsToList: string;
  searchValue: string | number;
  searchLabel: string;
  buttonLabel?: string;
  hintText?: string;
  onRecordsToListChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  addRecordFunction?: () => void;
}

interface TableProps<T> {
  children?: ReactNode | ReactNode[];
  headers: TableHeaderType[];
  recordsData: T[];
  columnKeys: Columnkey[];
  recordTitle: string;
  recordTitleKey?: string;
  paginationConfig?: PaginationConfig;
  isLoading?: boolean;
  loadingMessage?: string;
  getTableOptions?: (record: T) => IconOnlyButtonProps[];
}

interface LoadingTableRowProps {
  children: ReactNode | ReactNode[];
}

export type {
  MobileTableValueType,
  TableHeaderType,
  Columnkey,
  CommonTableProps,
  MobileTableProps,
  MobileTableRecordProps,
  RowProps,
  ColumnProps,
  TableToolsProps,
  TableProps,
  LoadingTableRowProps,
};

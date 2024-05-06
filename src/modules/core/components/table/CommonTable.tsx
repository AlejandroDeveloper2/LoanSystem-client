import {
  ColumnProps,
  CommonTableProps,
  LoadingTableRowProps,
  RowProps,
} from "@modules/core/interfaces/components-interfaces/TableProps";

import { Pagination } from "..";

import styles from "./Table.module.css";

const CommonTable = ({
  children,
  headers,
  paginationConfig,
}: CommonTableProps): JSX.Element => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map(({ label, Icon }, i) => (
              <th key={i}>
                <Icon id="icon-header" />
                <span className="paragraph">{label}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
      {paginationConfig ? (
        <Pagination paginationConfig={paginationConfig} />
      ) : null}
    </div>
  );
};

const EmpyTableRow = (): JSX.Element => {
  return (
    <tr className={styles.emptyRow}>
      <td id="table-cell" colSpan={10}>
        <p className="buttonText">¡No hay registros aún!</p>
      </td>
    </tr>
  );
};

const LoadingTableRow = ({ children }: LoadingTableRowProps): JSX.Element => {
  return (
    <tr className={styles.loadingRow}>
      <td colSpan={10}>{children}</td>
    </tr>
  );
};

const Row = ({ children }: RowProps): JSX.Element => {
  return <tr>{children}</tr>;
};

const Column = ({ value, children }: ColumnProps): JSX.Element => {
  return (
    <td id="table-cell">
      {value ? (
        <span id="cell-span" className="paragraph">
          {value}
        </span>
      ) : null}
      {children}
    </td>
  );
};

CommonTable.Row = Row;
Row.Column = Column;
CommonTable.EmptyRow = EmpyTableRow;
CommonTable.LoadingRow = LoadingTableRow;

export default CommonTable;

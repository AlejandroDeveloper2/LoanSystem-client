import {
  MobileTableProps,
  MobileTableRecordProps,
} from "@modules/core/interfaces/components-interfaces/TableProps";

import { Pagination } from "..";

import styles from "./Table.module.css";

const MobileTable = ({
  children,
  paginationConfig,
}: MobileTableProps): JSX.Element => {
  return (
    <ol className={styles.tableResponsiveContainer}>
      {children}
      {paginationConfig ? (
        <Pagination paginationConfig={paginationConfig} />
      ) : null}
    </ol>
  );
};

const TableRecord = ({
  children,
  values,
  title,
}: MobileTableRecordProps): JSX.Element => {
  return (
    <div className={styles.tableResponsiveRecord}>
      <div className={styles.head}>
        <h3 className="heading3">{title}</h3>
      </div>
      <ul className={styles.tableResponsiveBody}>
        {values.map(({ Icon, label, value }, i) => (
          <li key={i}>
            <Icon id="icon-header" />
            <span className="paragraph">{label}</span>
            <p className="paragraph">{value}</p>
          </li>
        ))}
        <li>{children}</li>
      </ul>
    </div>
  );
};

const EmptyTable = (): JSX.Element => {
  return (
    <div className={styles.emptyTable}>
      <p className="buttonText">¡No hay registros aún!</p>
    </div>
  );
};

MobileTable.Record = TableRecord;
MobileTable.Empty = EmptyTable;

export default MobileTable;

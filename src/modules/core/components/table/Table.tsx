import { useScreenType } from "@modules/core/hooks";
import {
  formatMoney,
  getBadgeVariant,
  getRowValue,
} from "@modules/core/utils/helpers";

import { TableProps } from "@modules/core/interfaces/components-interfaces/TableProps";

import {
  Badge,
  IconOnlyButton,
  Spinner,
  CommonTable,
  MobileTable,
  TableTools,
} from "..";

function Table<T>({
  headers,
  recordsData,
  columnKeys,
  getTableOptions,
  recordTitle,
  recordTitleKey,
  paginationConfig,
  children,
  isLoading,
  loadingMessage,
}: TableProps<T>) {
  const screenType = useScreenType();

  if (screenType === "desktop")
    return (
      <>
        {children}
        <CommonTable headers={headers} paginationConfig={paginationConfig}>
          {isLoading ? (
            <CommonTable.LoadingRow>
              <Spinner className="spinnerBarPrimary" message={loadingMessage} />
            </CommonTable.LoadingRow>
          ) : recordsData.length === 0 ? (
            <CommonTable.EmptyRow />
          ) : (
            recordsData.map((record, i) => (
              <CommonTable.Row key={i}>
                {columnKeys.map((columnKey, x) =>
                  columnKey.badgeValue ? (
                    <CommonTable.Row.Column key={x}>
                      <Badge
                        label={
                          columnKey.fieldType === "currency"
                            ? formatMoney(Object(record)[columnKey.key])
                            : Object(record)[columnKey.key]
                        }
                        variant={getBadgeVariant(
                          columnKey.key,
                          Object(record)[columnKey.key]
                        )}
                      />
                    </CommonTable.Row.Column>
                  ) : (
                    <CommonTable.Row.Column
                      key={x}
                      value={getRowValue<T>(columnKey, record)}
                    />
                  )
                )}
                {getTableOptions ? (
                  <CommonTable.Row.Column>
                    {getTableOptions(record).map((option) => (
                      <IconOnlyButton key={option.id} {...option} />
                    ))}
                  </CommonTable.Row.Column>
                ) : null}
              </CommonTable.Row>
            ))
          )}
        </CommonTable>
      </>
    );
  return (
    <>
      {children}
      <MobileTable paginationConfig={paginationConfig}>
        {isLoading ? (
          <Spinner className="spinnerBarPrimary" message={loadingMessage} />
        ) : recordsData.length === 0 ? (
          <MobileTable.Empty />
        ) : (
          recordsData.map((record, i) => (
            <MobileTable.Record
              key={i}
              title={
                !recordTitleKey
                  ? recordTitle + "#" + (i + 1)
                  : recordTitle + " " + Object(record)[recordTitleKey]
              }
              values={headers.map((header, x) => ({
                ...header,
                value:
                  header.label === "Opciones"
                    ? ""
                    : getRowValue<T>(columnKeys[x], record),
              }))}
            >
              {getTableOptions
                ? getTableOptions(record).map((option) => (
                    <IconOnlyButton key={option.id} {...option} />
                  ))
                : null}
            </MobileTable.Record>
          ))
        )}
      </MobileTable>
    </>
  );
}

Table.Tools = TableTools;

export default Table;

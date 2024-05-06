import { ParsedClientRequestData } from "@modules/client-request/interfaces/data-interfaces";
import { ClientRequestTableProps } from "@modules/client-request/interfaces/components-interfaces/ClientRequestTableProps";
import {
  columnKeys,
  headers,
} from "@modules/client-request/constants/clientRequestTableData";

import { useClientRequestStore } from "@modules/client-request/state-store";

import { Table } from "@modules/core/components";

const ClientRequestTable = ({
  loading,
  loadingMessage,
  recordsToList,
  searchValue,
  paginationConfig,
  getTableOptions,
  onRecordsToListChange,
  onSearchValueChange,
}: ClientRequestTableProps): JSX.Element => {
  const { clientRequests } = useClientRequestStore();

  return (
    <Table<ParsedClientRequestData>
      headers={headers}
      recordsData={clientRequests}
      getTableOptions={getTableOptions}
      columnKeys={columnKeys}
      recordTitle="Solicitud"
      paginationConfig={paginationConfig}
      isLoading={loading}
      loadingMessage={loadingMessage}
    >
      <Table.Tools
        recordsToList={recordsToList}
        searchValue={searchValue}
        searchLabel="Buscar solicitud"
        onRecordsToListChange={onRecordsToListChange}
        onSearchChange={onSearchValueChange}
      />
    </Table>
  );
};

export default ClientRequestTable;

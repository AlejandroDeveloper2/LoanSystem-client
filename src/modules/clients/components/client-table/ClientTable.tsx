import {
  columnKeys,
  headers,
} from "@modules/clients/constants/clientTableData";

import { ClientTableProps } from "@modules/clients/interfaces/components-interfaces/ClientTableProps";
import { Client } from "@modules/clients/interfaces/data-interfaces";

import { useClientsStore } from "@modules/clients/state-store";

import { Table } from "@modules/core/components";

const ClientTable = ({
  loading,
  loadingMessage,
  paginationConfig,
  getTableOptions,
  onSearchValueChange,
  ...props
}: ClientTableProps): JSX.Element => {
  const { clients } = useClientsStore();

  return (
    <Table<Client>
      headers={headers}
      recordsData={clients}
      getTableOptions={getTableOptions}
      columnKeys={columnKeys}
      recordTitle="Cliente"
      paginationConfig={paginationConfig}
      isLoading={loading}
      loadingMessage={loadingMessage}
    >
      <Table.Tools
        {...props}
        searchLabel="Buscar cliente"
        onSearchChange={onSearchValueChange}
      />
    </Table>
  );
};

export default ClientTable;

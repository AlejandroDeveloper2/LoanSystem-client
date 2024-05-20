import { Group } from "iconoir-react";

import { useClientsStore } from "@modules/clients/state-store";
import { usePagination } from "@modules/core/hooks";
import { useClientLoad } from "@modules/clients/hooks";

import {
  ClientFilters,
  ClientIndicators,
  ClientTable,
} from "@modules/clients/components";

const ClientsPage = (): JSX.Element => {
  const { paginationData } = useClientsStore();
  const {
    searchValue,
    debouncedValue,
    recordsToList,
    currentPage,
    onSearchValueChange,
    onRecordsToListChange,
    ...paginationConfig
  } = usePagination(paginationData);
  const { loadingData, filter, getTableOptions } = useClientLoad(
    currentPage,
    searchValue,
    debouncedValue,
    recordsToList
  );

  return (
    <>
      <h1 className="heading1">
        <Group />
        Clientes
      </h1>
      <ClientIndicators loading={loadingData.loading} />
      <ClientFilters filter={filter} />
      <ClientTable
        loading={loadingData.loading}
        loadingMessage={loadingData.loadingMessage}
        searchValue={searchValue}
        recordsToList={recordsToList}
        paginationConfig={{
          ...paginationConfig,
          totalRecords: paginationData.totalElements,
        }}
        getTableOptions={getTableOptions}
        onSearchValueChange={onSearchValueChange}
        onRecordsToListChange={onRecordsToListChange}
      />
    </>
  );
};

export default ClientsPage;

import { GoogleDocs } from "iconoir-react";

import { filterOptions } from "@modules/client-request/constants/clientRequestTableData";

import { useClientRequestLoad } from "@modules/client-request/hooks";
import { useClientRequestStore } from "@modules/client-request/state-store";
import { usePagination } from "@modules/core/hooks";

import {
  ClientRequestTable,
  InviteLinkSection,
  RequestIndicators,
} from "@modules/client-request/components";
import { Filters } from "@modules/core/components";

const ClientRequestsPage = (): JSX.Element => {
  const { paginationData } = useClientRequestStore();

  const {
    searchValue,
    debouncedValue,
    recordsToList,
    currentPage,
    firstShownRecord,
    lastShownRecord,
    onSearchValueChange,
    onRecordsToListChange,
    next,
    back,
  } = usePagination(paginationData);

  const { loadingData, filter, DialogBox, DialogBox2, getTableOptions } =
    useClientRequestLoad(
      currentPage,
      searchValue,
      debouncedValue,
      recordsToList
    );

  return (
    <>
      <DialogBox />
      <DialogBox2 />
      <h1 className="heading1">
        <GoogleDocs />
        Solicitudes
      </h1>
      <RequestIndicators loading={loadingData.loading} />
      <InviteLinkSection />
      <Filters
        filterOptions={filterOptions}
        chosenFilter={filter.chosenFilter}
        onChangeFilter={filter.onChangeFilter}
      />
      <ClientRequestTable
        loading={loadingData.loading}
        loadingMessage={loadingData.loadingMessage}
        recordsToList={recordsToList}
        searchValue={searchValue}
        paginationConfig={{
          firstShownRecord,
          lastShownRecord,
          next,
          back,
          totalRecords: paginationData.totalElements,
        }}
        getTableOptions={getTableOptions}
        onSearchValueChange={onSearchValueChange}
        onRecordsToListChange={onRecordsToListChange}
      />
    </>
  );
};

export default ClientRequestsPage;

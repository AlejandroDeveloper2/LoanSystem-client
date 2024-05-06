import { HandCash } from "iconoir-react";

import { usePagination } from "@modules/core/hooks";
import { useLoanLoad } from "@modules/loan/hooks";
import { useLoanStore } from "@modules/loan/state-store";

import {
  LoanFilters,
  LoanIndicators,
  LoanTable,
} from "@modules/loan/components";

const LoansPage = (): JSX.Element => {
  const { pagination } = useLoanStore();

  const {
    searchValue,
    recordsToList,
    currentPage,
    firstShownRecord,
    lastShownRecord,
    onSearchValueChange,
    onRecordsToListChange,
    next,
    back,
  } = usePagination(pagination);

  const { loadingData, filter, DialogBox, DialogDelete, getTableOptions } =
    useLoanLoad(currentPage, searchValue, recordsToList);

  return (
    <>
      <DialogBox />
      <DialogDelete />
      <h1 className="heading1">
        <HandCash />
        Préstamos
      </h1>
      <LoanIndicators loading={loadingData.loading} />
      <LoanFilters filter={filter} />
      <LoanTable
        loading={loadingData.loading}
        loadingMessage={loadingData.loadingMessage}
        recordsToList={recordsToList}
        searchValue={searchValue}
        paginationConfig={{
          totalRecords: 0,
          firstShownRecord,
          lastShownRecord,
          next,
          back,
        }}
        getTableOptions={getTableOptions}
        onSearchValueChange={onSearchValueChange}
        onRecordsToListChange={onRecordsToListChange}
      />
    </>
  );
};

export default LoansPage;

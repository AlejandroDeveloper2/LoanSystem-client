/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";

import { Pagination } from "@modules/core/interfaces/data-interfaces";

const usePagination = (paginationData: Pagination) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [recordsToList, setRecordsToList] = useState<string>("5");
  const [currentPage, setCurrentPage] = useState<number>(paginationData.page);
  const [firstShownRecord, setFirstShownRecord] = useState<number>(1);
  const [lastShownRecord, setLastShownRecord] = useState<number>(
    window.parseInt(recordsToList)
  );

  const [debouncedValue, setDebouncedValue] = useState<string>(searchValue);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(searchValue), 1000);
    return () => clearTimeout(timer);
  }, [searchValue]);

  const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onRecordsToListChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setRecordsToList(e.target.value);
  };

  const next = (): void => {
    if (currentPage >= 0 && currentPage < paginationData.totalPages - 1) {
      setCurrentPage((currentPage) => currentPage + 1);
      if (currentPage >= 0) {
        setFirstShownRecord(
          (firstShownRecord) =>
            firstShownRecord + window.parseInt(recordsToList)
        );
      }

      setLastShownRecord(
        (lastShownRecord) => lastShownRecord + window.parseInt(recordsToList)
      );
    }
  };

  const back = (): void => {
    if (currentPage >= 1 && currentPage <= paginationData.totalPages - 1) {
      setCurrentPage((currentPage) => currentPage - 1);
      if (currentPage === 0) {
        setFirstShownRecord(1);
      } else {
        setFirstShownRecord(
          (firstShownRecord) =>
            firstShownRecord - window.parseInt(recordsToList)
        );
      }

      setLastShownRecord(
        (lastShownRecord) => lastShownRecord - window.parseInt(recordsToList)
      );
    }
  };

  return {
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
  };
};
export default usePagination;

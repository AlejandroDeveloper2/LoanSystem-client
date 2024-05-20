/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Client,
  ClientsFilters,
} from "@modules/clients/interfaces/data-interfaces";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import { useFilter, useLoading } from "@modules/core/hooks";
import { useClientsStore } from "@modules/clients/state-store";
import { getClientTableOptions } from "@modules/clients/utils/helpers";

const useClientLoad = (
  currentPage: number,
  searchValue: string,
  debouncedValue: string,
  recordsToList: string
) => {
  const navigate = useNavigate();

  const { loading, loadingMessage, toggleLoading } = useLoading();
  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<ClientsFilters>({ initialDate: "", finalDate: "" }, "ASC");

  const { getAllClients } = useClientsStore();

  useEffect(() => {
    const controller = new AbortController();
    if ((debouncedValue && debouncedValue.length >= 3) || searchValue === "") {
      getAllClients(
        recordsToList,
        String(currentPage),
        searchValue,
        filtersData,
        chosenFilter,
        toggleLoading,
        controller.signal
      );
    }
    return () => controller.abort();
  }, [
    currentPage,
    filtersData,
    chosenFilter,
    recordsToList,
    debouncedValue,
    currentPage,
  ]);

  const getTableOptions = (client: Client): IconOnlyButtonProps[] => {
    return getClientTableOptions(client, navigate);
  };

  return {
    loadingData: {
      loading,
      loadingMessage,
    },
    filter: {
      chosenFilter,
      filtersData,
      onChangeFilter,
      onChangeFilterInput,
    },
    getTableOptions,
  };
};

export default useClientLoad;

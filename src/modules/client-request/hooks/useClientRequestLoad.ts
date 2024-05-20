/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  ClientRequestFilters,
  ParsedClientRequestData,
} from "@modules/client-request/interfaces/data-interfaces";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import { useAuthStore } from "@modules/auth/state-store";
import { useDialog, useFilter, useLoading } from "@modules/core/hooks";
import { useClientRequestStore } from "@modules/client-request/state-store";
import { getClientRequestTableOptions } from "@modules/client-request/utils/helpers";

const useClientRequestLoad = (
  currentPage: number,
  searchValue: string,
  debouncedValue: string,
  recordsToList: string
) => {
  const navigate = useNavigate();

  const { loading, loadingMessage, toggleLoading } = useLoading();

  const auth = useAuthStore((state) => state.auth);
  const { getAllClientRequests, approveClientRequest, rejectClientRequest } =
    useClientRequestStore();

  const { filtersData, chosenFilter, onChangeFilter } =
    useFilter<ClientRequestFilters>({ requestDate: "" }, "Todo");

  const { DialogBox, toggleDialog, updateElementId } = useDialog(
    "¿Desea aprobar la solicitud?",
    "Aprobar solicitud",
    approveClientRequest
  );
  const {
    DialogBox: DialogBox2,
    toggleDialog: toggleRejectDialog,
    updateElementId: updateRejectElementId,
  } = useDialog(
    "¿Desea rechazar la solicitud?",
    "Rechazar solicitud",
    rejectClientRequest
  );

  useEffect(() => {
    const controller = new AbortController();
    if ((debouncedValue && debouncedValue.length >= 3) || searchValue === "") {
      getAllClientRequests(
        currentPage,
        recordsToList,
        searchValue,
        filtersData,
        chosenFilter === "Todo" ? "" : chosenFilter,
        toggleLoading,
        controller.signal
      );
    }
    return () => controller.abort();
  }, [currentPage, filtersData, chosenFilter, recordsToList, debouncedValue]);

  const getTableOptions = (
    request: ParsedClientRequestData
  ): IconOnlyButtonProps[] => {
    return getClientRequestTableOptions(
      request,
      navigate,
      auth,
      toggleDialog,
      updateElementId,
      toggleRejectDialog,
      updateRejectElementId
    );
  };

  return {
    loadingData: {
      loading,
      loadingMessage,
    },
    filter: {
      filtersData,
      chosenFilter,
      onChangeFilter,
    },
    DialogBox,
    DialogBox2,
    getTableOptions,
  };
};

export default useClientRequestLoad;

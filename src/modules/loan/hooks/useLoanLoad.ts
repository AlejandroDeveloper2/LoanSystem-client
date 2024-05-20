/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Loan, LoanFilters } from "../interfaces/data-interfaces";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import {
  getCancelLoanOption,
  getDeleteLoanOption,
  getEditLoanTableOption,
  getLoanAnnotationOption,
} from "@modules/loan/utils/helpers";
import { useDialog, useFilter, useLoading } from "@modules/core/hooks";
import { useAuthStore } from "@modules/auth/state-store";
import { useLoanStore } from "@modules/loan/state-store";

const useLoanLoad = (
  currentPage: number,
  searchValue: string,
  debouncedValue: string,
  recordsToList: string
) => {
  const navigate = useNavigate();

  const { loading, loadingMessage, toggleLoading } = useLoading();
  const { loading: loadingIndicator, toggleLoading: toggleLoadingIndicator } =
    useLoading();

  const { filtersData, chosenFilter, onChangeFilter, onChangeFilterInput } =
    useFilter<LoanFilters>({ loanDate: "", paymentCycle: "" }, "Todos");

  const {
    loans,
    getAllLoans,
    getLoanIndicators,
    cancelLoan,
    deleteLoan,
    getPaymentIndicators,
  } = useLoanStore();

  const auth = useAuthStore((state) => state.auth);

  const { DialogBox, toggleDialog, updateElementId } = useDialog(
    "¿Desea Cancelar el préstamo?",
    "Cancelar préstamo",
    cancelLoan
  );
  const {
    DialogBox: DialogDelete,
    toggleDialog: toggleDialogDelete,
    updateElementId: updateLoanId,
  } = useDialog(
    "¿Desea eliminar el préstamo?",
    "Eliminar préstamo",
    deleteLoan
  );

  useEffect(() => {
    getLoanIndicators(toggleLoadingIndicator);
  }, []);

  useEffect(() => {
    getPaymentIndicators(toggleLoadingIndicator);
  }, [loans]);

  useEffect(() => {
    const controller = new AbortController();
    if ((debouncedValue && debouncedValue.length >= 3) || searchValue === "") {
      getAllLoans(
        currentPage,
        recordsToList,
        searchValue,
        filtersData,
        chosenFilter === "Todos" ? "" : chosenFilter,
        toggleLoading,
        controller.signal
      );
    }

    return () => controller.abort();
  }, [currentPage, filtersData, chosenFilter, recordsToList, debouncedValue]);

  const getTableOptions = (loan: Loan): IconOnlyButtonProps[] => {
    return [
      getEditLoanTableOption(loan, navigate),
      getCancelLoanOption(loan, auth, toggleDialog, updateElementId),
      getDeleteLoanOption(loan, auth, toggleDialogDelete, updateLoanId),
      getLoanAnnotationOption(loan, navigate),
    ];
  };

  return {
    loadingData: {
      loading,
      loadingMessage,
      loadingIndicator,
    },
    filter: {
      filtersData,
      chosenFilter,
      onChangeFilter,
      onChangeFilterInput,
    },
    DialogBox,
    DialogDelete,
    getTableOptions,
  };
};
export default useLoanLoad;

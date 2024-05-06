/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ApproveLoanDataForm } from "../interfaces/data-interfaces";

import { useLoading } from "@modules/core/hooks";
import { useLoanStore } from "../state-store";
import { calculateNumberOfQuotas } from "../utils/helpers";

const useApproveLoanFormLoad = (
  formData: ApproveLoanDataForm,
  updateFormInitialValues: (filledInitialValues: ApproveLoanDataForm) => void
) => {
  const params = useParams();
  const loanParam = params as { loanId: string };

  const {
    loading: loadingLoan,
    loadingMessage: loadingMessageLoan,
    toggleLoading: toggleLoadingLoan,
  } = useLoading();

  const {
    loading: loadingApproveLoan,
    toggleLoading: toggleLoadingApproveLoan,
  } = useLoading();
  const {
    loading: loadingPaymentSchedule,
    loadingMessage: loadingPaymentScheduleMessage,
    toggleLoading: toggleLoadingPaymentSchedule,
  } = useLoading();

  const { loan, getLoan } = useLoanStore();

  useEffect(() => {
    getLoan(loanParam.loanId, toggleLoadingLoan);
  }, [loanParam]);

  useEffect(() => {
    if (loan.id !== "") {
      updateFormInitialValues({
        ...loan,
        firstPaymentDate: loan.firstPaymentDate ? loan.firstPaymentDate : "",
        numberOfQuotas: calculateNumberOfQuotas(
          loan.loanState !== "Pendiente" ? loan.deadline : formData.deadline,
          loan.loanState !== "Pendiente"
            ? loan.paymentCycle
            : formData.paymentCycle
        ),
      });
    }
  }, [loan]);

  return {
    loanParam,
    loadingData: {
      loadingLoan,
      loadingMessageLoan,
      loadingApproveLoan,
      toggleLoadingApproveLoan,
      loadingPaymentSchedule,
      loadingPaymentScheduleMessage,
      toggleLoadingPaymentSchedule,
    },
  };
};

export default useApproveLoanFormLoad;

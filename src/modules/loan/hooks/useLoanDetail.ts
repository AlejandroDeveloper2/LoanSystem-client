/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useLoanStore } from "../state-store";
import { useLoading } from "@modules/core/hooks";
import { useClientsStore } from "@modules/clients/state-store";

const useLoanDetail = () => {
  const params = useParams();
  const loanParam = params as { loanId: string };

  const { loan, getLoan } = useLoanStore();
  const { getClient } = useClientsStore();

  const { loading, loadingMessage, toggleLoading } = useLoading();
  const { toggleLoading: toggleClientLoading } = useLoading();

  useEffect(() => {
    getLoan(loanParam.loanId, toggleLoading);
  }, [loanParam]);

  useEffect(() => {
    if (loan.id !== "") getClient(loan.client.id, toggleClientLoading);
  }, [loan.id]);

  return {
    loanParam,
    loadingData: {
      loading,
      loadingMessage,
    },
  };
};

export default useLoanDetail;

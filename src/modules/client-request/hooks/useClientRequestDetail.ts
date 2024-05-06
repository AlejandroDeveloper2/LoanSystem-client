/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useClientRequestStore } from "../state-store";
import { useLoading } from "@modules/core/hooks";

const useClientRequestDetail = () => {
  const params = useParams();
  const request = params as { loanRequestId: string };

  const { getClientRequest } = useClientRequestStore();
  const { loading, loadingMessage, toggleLoading } = useLoading();

  useEffect(() => {
    getClientRequest(request.loanRequestId, toggleLoading);
  }, [request]);

  return {
    request,
    loadingData: {
      loading,
      loadingMessage,
    },
  };
};

export default useClientRequestDetail;

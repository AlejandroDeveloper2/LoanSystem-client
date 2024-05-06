/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useClientsStore } from "../state-store";
import { useLoading } from "@modules/core/hooks";

const useClientDetail = () => {
  const params = useParams();
  const clientParam = params as { clientId: string };

  const { getClient } = useClientsStore();
  const { loading, loadingMessage, toggleLoading } = useLoading();

  useEffect(() => {
    getClient(clientParam.clientId, toggleLoading);
  }, [clientParam]);

  return {
    loadingData: {
      loading,
      loadingMessage,
    },
    clientParam,
  };
};

export default useClientDetail;

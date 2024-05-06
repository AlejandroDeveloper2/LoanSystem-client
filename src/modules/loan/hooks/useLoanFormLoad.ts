/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useClientsStore } from "@modules/clients/state-store";
import { useLoading } from "@modules/core/hooks";

const useLoanFormLoad = () => {
  const { loading, loadingMessage, toggleLoading } = useLoading();
  const { loading: loadingSaveLoan, toggleLoading: toggleLoadingSaveLoan } =
    useLoading();

  const { clients, getAllClients } = useClientsStore();

  useEffect(() => {
    getAllClients(
      "1000",
      "",
      "",
      { initialDate: "", finalDate: "" },
      "",
      toggleLoading
    );
  }, []);

  return {
    clients,
    loadingData: {
      loading,
      loadingMessage,
      loadingSaveLoan,
      toggleLoadingSaveLoan,
    },
  };
};

export default useLoanFormLoad;

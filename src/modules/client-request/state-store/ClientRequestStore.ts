import { create } from "zustand";
import { toast } from "react-toastify";

import { ClientRequestStore } from "@modules/client-request/interfaces/store-interfaces";
import {
  ClientRequestData,
  ClientRequestFilters,
  ParsedClientRequestData,
} from "@modules/client-request/interfaces/data-interfaces";
import {
  ResponseGlobal,
  TableResponse,
} from "@modules/core/interfaces/data-interfaces";

import { ClientRequestService } from "@modules/client-request/services/ClientRequest.service";

const clientRequestService = new ClientRequestService();

const useClientRequestStore = create<ClientRequestStore>((set, get) => ({
  clientRequests: [],
  clientRequest: null,
  paginationData: {
    page: 0,
    totalPages: 0,
    totalElements: 0,
    limit: "",
  },
  approveClientRequest: async (
    clientRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";

    try {
      toggleLoading("Aprobando solicitud...", true);
      const { body } = await clientRequestService.approveClientRequest(
        token,
        clientRequestId
      );
      set(({ clientRequests }) => ({
        clientRequests: clientRequests.filter(
          (request) => request.id !== body.id
        ),
      }));

      await get().getAllClientRequests(
        get().paginationData.page,
        get().paginationData.limit,
        "",
        {
          requestDate: "",
        },
        "",
        toggleLoading
      );
      toast.success("¡Solicitud aprobada correctamente!");
    } catch (e: unknown) {
      toast.error("Ha ocurrido un error al intentar aprobar la solicitud!");
    } finally {
      toggleLoading("", false);
    }
  },
  rejectClientRequest: async (
    clientRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Rechazando solicitud...", true);
      const { body } = await clientRequestService.rejectClientRequest(
        token,
        clientRequestId
      );
      set(({ clientRequests }) => ({
        clientRequests: clientRequests.filter(
          (request) => request.id !== body.id
        ),
      }));
      await get().getAllClientRequests(
        get().paginationData.page,
        get().paginationData.limit,
        "",
        {
          requestDate: "",
        },
        "",
        toggleLoading
      );
      toast.success("¡Solicitud rechazada!");
    } catch (e: unknown) {
      toast.error("Ha ocurrido un error al intentar rechazar la solicitud!");
    } finally {
      toggleLoading("", false);
    }
  },
  getAllClientRequests: async (
    page: number,
    limit: string,
    searchValue: string,
    loanRequestFilters: ClientRequestFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando solicitudes...", true);
      const {
        body: clientRequests,
        pagination,
      }: TableResponse<ParsedClientRequestData> =
        await clientRequestService.getAllClientRequests(
          token,
          page,
          limit,
          searchValue,
          loanRequestFilters,
          filter
        );

      set({ clientRequests, paginationData: { ...pagination, limit } });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar las solicitudes!");
    } finally {
      toggleLoading("", false);
    }
  },
  getClientRequest: async (
    clientRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando solicitud...", true);
      const { body: clientRequest }: ResponseGlobal<ClientRequestData> =
        await clientRequestService.getClientRequest(token, clientRequestId);
      set({ clientRequest });
    } catch (e: unknown) {
      toast.error(
        "¡Ha ocurrido un error al obtener la información de la solicitud!"
      );
    } finally {
      toggleLoading("", false);
    }
  },
}));

export default useClientRequestStore;

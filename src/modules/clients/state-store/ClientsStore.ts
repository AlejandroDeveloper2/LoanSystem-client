import { create } from "zustand";
import { toast } from "react-toastify";

import { ClientsService } from "@modules/clients/services/Clients.service";
import {
  getUpdatedClient,
  parseUpdatedClientInfo,
} from "@modules/clients/utils/helpers";

import { ClientStore } from "@modules/clients/interfaces/store-interfaces";
import {
  Client,
  ClientDocType,
  ClientsFilters,
  UpdateClientDataForm,
} from "@modules/clients/interfaces/data-interfaces";
import {
  ResponseGlobal,
  ServerResponse,
  TableResponse,
} from "@modules/core/interfaces/data-interfaces";

const clientsService = new ClientsService();

const useClientsStore = create<ClientStore>((set, get) => ({
  clients: [],
  client: null,
  paginationData: {
    page: 0,
    totalPages: 0,
    totalElements: 0,
    limit: "",
  },
  getAllClients: async (
    limit: string,
    page: string,
    searchValue: string,
    clientFilters: ClientsFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void,
    signal?: AbortSignal
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando clientes...", true);
      const { body: clients, pagination }: TableResponse<Client> =
        await clientsService.getAllClients(
          token,
          page,
          limit,
          searchValue,
          clientFilters,
          filter,
          signal
        );
      set({ clients, paginationData: { ...pagination, limit } });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar los clientes!");
    } finally {
      toggleLoading("", false);
    }
  },
  getClient: async (
    clientId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando cliente...", true);
      const { body: client }: ResponseGlobal<Client> =
        await clientsService.getClient(token, clientId);
      set({ client });
    } catch (e: unknown) {
      const parsedError = e as ServerResponse;
      console.log(parsedError);
      toast.error("¡Ha ocurrido un error al obtener el cliente!");
    } finally {
      toggleLoading("", false);
    }
  },
  updateClient: async (
    clientId: string,
    updatedClientData: UpdateClientDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    const parsedClientData: Client = parseUpdatedClientInfo(
      clientId,
      updatedClientData
    );

    try {
      toggleLoading("Actualizando información...", true);
      const updatedClient: Client = await clientsService.updateClient(
        token,
        clientId,
        parsedClientData
      );
      set(({ clients }) => ({
        clients: clients.map((client) => {
          if (client.id === clientId) return updatedClient;
          return client;
        }),
      }));
      set(({ clients }) => ({
        client: clients.filter((client) => client.id === clientId)[0],
      }));
      toast.success("¡El cliente ha sido actualizado correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al actualizar el cliente!");
    } finally {
      toggleLoading("", false);
    }
  },
  uploadClientDoc: async (
    clientId: string,
    document: Blob,
    fileType: ClientDocType,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Subiendo documento...", true);
      const formData = new FormData();
      formData.append("file", document);
      formData.append("fileType", fileType);

      const { body: documentUrl }: ResponseGlobal<string> =
        await clientsService.uploadClientDoc(token, clientId, formData);
      const resDocument: Blob = await clientsService.getClientDoc(documentUrl);

      const hrefDocument = URL.createObjectURL(resDocument);

      set({
        client: getUpdatedClient(get().client!, fileType, hrefDocument),
      });
      toast.success("¡Documento cargado con exito!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al subir el documento!");
    } finally {
      toggleLoading("", false);
    }
  },

  updateClientDoc: async (
    clientId: string,
    document: Blob,
    fileType: ClientDocType,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Actualizando documento...", true);
      const formData = new FormData();
      formData.append("file", document);
      formData.append("fileType", fileType);

      const { body: documentUrl }: ResponseGlobal<string> =
        await clientsService.updateClientDoc(token, clientId, formData);
      const resDocument: Blob = await clientsService.getClientDoc(documentUrl);

      const hrefDocument = URL.createObjectURL(resDocument);

      set({
        client: getUpdatedClient(get().client!, fileType, hrefDocument),
      });
      toast.success("¡Documento actualizado con exito!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al actualizar el documento!");
    } finally {
      toggleLoading("", false);
    }
  },
}));

export default useClientsStore;

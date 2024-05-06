import {
  Client,
  ClientsFilters,
  UpdateClientDataForm,
} from "@modules/clients/interfaces/data-interfaces";
import { Pagination } from "@modules/core/interfaces/data-interfaces";

export interface ClientStore {
  clients: Client[];
  client: Client | null;
  paginationData: Pagination;
  getAllClients: (
    limit: string,
    page: string,
    searchValue: string,
    clientFilters: ClientsFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getClient: (
    clientId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  updateClient: (
    clientId: string,
    updatedClientData: UpdateClientDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

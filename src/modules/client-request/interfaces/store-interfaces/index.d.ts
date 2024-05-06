import { Pagination } from "@modules/core/interfaces/data-interfaces";
import {
  ClientRequestData,
  ClientRequestFilters,
  ParsedClientRequestData,
} from "@modules/client-request/interfaces/data-interfaces";

export interface ClientRequestStore {
  clientRequests: ParsedClientRequestData[];
  clientRequest: ClientRequestData | null;
  paginationData: Pagination;
  approveClientRequest: (
    clientRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  rejectClientRequest: (
    clientRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getAllClientRequests: (
    page: number,
    limit: string,
    searchValue: string,
    clientRequestFilters: ClientRequestFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
  getClientRequest: (
    clientRequestId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ) => Promise<void>;
}

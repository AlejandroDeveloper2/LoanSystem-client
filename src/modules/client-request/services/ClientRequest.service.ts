import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import {
  ResponseGlobal,
  TableResponse,
} from "@modules/core/interfaces/data-interfaces";
import {
  ClientRequestData,
  ClientRequestFilters,
  ParsedClientRequestData,
} from "@modules/client-request/interfaces/data-interfaces";

export class ClientRequestService {
  constructor() {}
  public async approveClientRequest(
    token: string,
    clientRequestId: string
  ): Promise<ResponseGlobal<{ id: string }>> {
    let response: ResponseGlobal<{ id: string }>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<ResponseGlobal<{ id: string }>>(
        `/loan-application/approve/${clientRequestId}`,
        {},
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async rejectClientRequest(
    token: string,
    loanClientId: string
  ): Promise<ResponseGlobal<{ id: string }>> {
    let response: ResponseGlobal<{ id: string }>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.delete<ResponseGlobal<{ id: string }>>(
        `/loan-application/reject/${loanClientId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getAllClientRequests(
    token: string,
    page: number,
    limit: string,
    searchValue: string,
    loanRequestFilters: ClientRequestFilters,
    filter?: string
  ): Promise<TableResponse<ParsedClientRequestData>> {
    let response: TableResponse<ParsedClientRequestData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
        paymentCycle: filter,
        page,
        filterCriteriaText: searchValue,
        startDate: loanRequestFilters.requestDate,
      },
    };

    try {
      const { data } = await axiosClient.get<
        TableResponse<ParsedClientRequestData>
      >("/loan-application", config);
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getClientRequest(
    token: string,
    requestId: string
  ): Promise<ResponseGlobal<ClientRequestData>> {
    let response: ResponseGlobal<ClientRequestData>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.get<ResponseGlobal<ClientRequestData>>(
        `/loan-application/${requestId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }

    return response;
  }
}

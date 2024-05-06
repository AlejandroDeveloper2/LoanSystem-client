import { AxiosError, AxiosRequestConfig } from "axios";

import axiosClient from "@config/AxiosClient";

import {
  TableResponse,
  ServerResponse,
  ResponseGlobal,
} from "@modules/core/interfaces/data-interfaces";
import {
  ClientsFilters,
  Client,
} from "@modules/clients/interfaces/data-interfaces";

export class ClientsService {
  constructor() {}

  public async getAllClients(
    token: string,
    page: string,
    limit: string,
    searchValue: string,
    clientFilters: ClientsFilters,
    filter?: string
  ): Promise<TableResponse<Client>> {
    let response: TableResponse<Client>;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
        orderBy: filter,
        page,
        filterCriteriaText: searchValue,
        startDate: clientFilters.initialDate,
        endDate: clientFilters.finalDate,
      },
    };
    try {
      const { data } = await axiosClient.get<TableResponse<Client>>(
        "/clients",
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      const errorMessage = parsedError?.response?.data;
      const parsedErrorMessage: ServerResponse = errorMessage as ServerResponse;
      throw new AxiosError(parsedErrorMessage.message);
    }
    return response;
  }

  public async getClient(
    token: string,
    clientId: string
  ): Promise<ResponseGlobal<Client>> {
    let response: ResponseGlobal<Client>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.get<ResponseGlobal<Client>>(
        `/clients/${clientId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async updateClient(
    token: string,
    clientId: string,
    updatedClientData: Client
  ): Promise<Client> {
    let response: Client;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.put<Client>(
        `/clients/${clientId}`,
        updatedClientData,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async uploadClientDoc(
    token: string,
    clientId: string,
    formData: FormData
  ): Promise<ResponseGlobal<string>> {
    let response: ResponseGlobal<string>;
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.post<ResponseGlobal<string>>(
        `/clients/${clientId}/document-upload`,
        formData,
        config
      );

      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      console.log(parsedError);
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async updateClientDoc(
    token: string,
    clientId: string,
    formData: FormData
  ): Promise<ResponseGlobal<string>> {
    let response: ResponseGlobal<string>;
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<ResponseGlobal<string>>(
        `/clients/${clientId}/update-document`,
        formData,
        config
      );

      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      console.log(parsedError);
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getClientDoc(documentUrl: string): Promise<Blob> {
    let response: Blob;
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/pdf",
      },
      responseType: "blob",
    };
    try {
      const { data } = await axiosClient.get<Blob>(documentUrl, config);

      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      console.log(parsedError);
      throw new AxiosError(parsedError.message);
    }
    return response;
  }
}

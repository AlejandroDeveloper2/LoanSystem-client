import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import {
  ResponseGlobal,
  ServerResponse,
} from "@modules/core/interfaces/data-interfaces";
import { RequestFormData } from "@modules/loan-request/interfaces/data-interfaces";

export class LoanRequestService {
  constructor() {}
  public async validateClient(
    identification: string
  ): Promise<ResponseGlobal<boolean>> {
    let response: ResponseGlobal<boolean>;
    try {
      const { data } = await axiosClient.get<ResponseGlobal<boolean>>(
        `/clients/search-by-id?identification=${identification}`
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

  public async createLoanRequest(requestData: RequestFormData): Promise<void> {
    try {
      await axiosClient.post<void>("/loan-application", requestData);
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      const errorMessage = parsedError?.response?.data;
      const parsedErrorMessage: ServerResponse = errorMessage as ServerResponse;
      throw new AxiosError(parsedErrorMessage.message);
    }
  }
}

import { AxiosError, AxiosRequestConfig } from "axios";

import axiosClient from "@config/AxiosClient";

import { ResponseGlobal } from "@modules/core/interfaces/data-interfaces";

export class PromissoryNoteService {
  constructor() {}

  public async uploadPromissoryNote(
    token: string,
    loanId: string,
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
        `/loan/${loanId}/document-upload`,
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

  public async updatePromissoryNote(
    token: string,
    loanId: string,
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
        `/loan/${loanId}/update-document`,
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

  public async getSignedPromissoryNote(documentUrl: string): Promise<Blob> {
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

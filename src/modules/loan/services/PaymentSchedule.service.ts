import { AxiosError, AxiosRequestConfig } from "axios";

import axiosClient from "@config/AxiosClient";

import {
  ResponseGlobal,
  TableResponse,
} from "@modules/core/interfaces/data-interfaces";
import {
  ApproveLoanDataForm,
  PartialPaymentDataForm,
  PaymentIndicator,
  PaymentSchedule,
} from "@modules/loan/interfaces/data-interfaces";

export class PaymentScheduleService {
  constructor() {}

  public async generatePaymentSchedule(
    token: string,
    loanData: ApproveLoanDataForm
  ): Promise<TableResponse<PaymentSchedule>> {
    let response: TableResponse<PaymentSchedule>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.post<TableResponse<PaymentSchedule>>(
        "/loan/generate-payment-schedule",
        loanData,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async payLoanQuota(
    token: string,
    paymentId: string,
    payment: PartialPaymentDataForm
  ): Promise<ResponseGlobal<PaymentSchedule>> {
    let response: ResponseGlobal<PaymentSchedule>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.patch<ResponseGlobal<PaymentSchedule>>(
        `/payment-schedule/make-payment/${paymentId}`,
        payment,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getPaymentTicket(
    token: string,
    loanId: string,
    paymentId: string
  ): Promise<Blob> {
    let response: Blob;
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/pdf",
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    };
    try {
      const { data } = await axiosClient.get<Blob>(
        `/loan/report/${loanId}/payment/${paymentId}`,
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

  public async getPaymentIndicators(
    token: string
  ): Promise<ResponseGlobal<PaymentIndicator>> {
    let response: ResponseGlobal<PaymentIndicator>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.get<ResponseGlobal<PaymentIndicator>>(
        "/payment-schedule/indicators",
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

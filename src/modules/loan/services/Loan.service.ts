import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import {
  ApproveLoanDataForm,
  Loan,
  LoanDataForm,
  LoanFilters,
  LoanIndicator,
} from "@modules/loan/interfaces/data-interfaces";
import {
  ResponseGlobal,
  TableResponse,
} from "@modules/core/interfaces/data-interfaces";

import { ClientsService } from "@modules/clients/services/Clients.service";

const clientService = new ClientsService();

export class LoanService {
  constructor() {}

  public async getAllLoans(
    token: string,
    page: number,
    limit: string,
    searchValue: string,
    loanFilters: LoanFilters,
    filter: string
  ): Promise<TableResponse<Loan>> {
    let response: TableResponse<Loan>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit,
        loanState: filter,
        page,
        filterCriteriaText: searchValue,
        startDate: loanFilters.loanDate,
        paymentCycle: loanFilters.paymentCycle,
      },
    };
    try {
      const { data } = await axiosClient.get<TableResponse<Loan>>(
        "/loan",
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getLoan(
    token: string,
    loanId: string
  ): Promise<ResponseGlobal<Loan>> {
    let response: ResponseGlobal<Loan>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.get<ResponseGlobal<Loan>>(
        `/loan/${loanId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async createLoan(
    token: string,
    loanData: LoanDataForm
  ): Promise<ResponseGlobal<Loan>> {
    let response: ResponseGlobal<Loan>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { body: client } = await clientService.getClient(
        token,
        loanData.client
      );
      const { data } = await axiosClient.post<ResponseGlobal<Loan>>(
        "/loan",
        { ...loanData, client },
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async approveLoan(
    token: string,
    loanId: string,
    loanData: ApproveLoanDataForm
  ): Promise<ResponseGlobal<Loan>> {
    let response: ResponseGlobal<Loan>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.patch<ResponseGlobal<Loan>>(
        `/loan/approve/${loanId}`,
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
  public async cancelLoan(
    token: string,
    loanId: string
  ): Promise<ResponseGlobal<Loan>> {
    let response: ResponseGlobal<Loan>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.patch<ResponseGlobal<Loan>>(
        `/loan/cancel/${loanId}`,
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

  public async deleteLoan(
    token: string,
    loanId: string
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
        `/loan/${loanId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async getLoanIndicators(
    token: string
  ): Promise<ResponseGlobal<LoanIndicator>> {
    let response: ResponseGlobal<LoanIndicator>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.get<ResponseGlobal<LoanIndicator>>(
        "/loan/indicators",
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

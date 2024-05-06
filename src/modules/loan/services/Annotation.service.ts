import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import {
  ResponseGlobal,
  TableResponse,
} from "@modules/core/interfaces/data-interfaces";
import {
  Annotation,
  AnnotationFilters,
  AnnotationFormData,
} from "@modules/loan/interfaces/data-interfaces";

export class AnnotationService {
  constructor() {}

  public async getAllAnnotations(
    loanId: string,
    token: string,
    page: number,
    limit: string,
    searchValue: string,
    annotationFilters: AnnotationFilters,
    filter?: string
  ): Promise<TableResponse<Annotation>> {
    let response: TableResponse<Annotation>;

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
        startDate: annotationFilters.startDate,
        endDate: annotationFilters.endDate,
      },
    };

    try {
      const { data } = await axiosClient.get<TableResponse<Annotation>>(
        `/annotation/loan/${loanId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async createAnnotation(
    token: string,
    loanId: string,
    annotation: AnnotationFormData
  ): Promise<ResponseGlobal<Annotation>> {
    let response: ResponseGlobal<Annotation>;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await axiosClient.post<ResponseGlobal<Annotation>>(
        "/annotation",
        { ...annotation, loanId },
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async updateAnnotation(
    token: string,
    annotationId: string,
    loanId: string,
    updatedAnnotation: AnnotationFormData
  ): Promise<ResponseGlobal<Annotation>> {
    let response: ResponseGlobal<Annotation>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.put<ResponseGlobal<Annotation>>(
        `/annotation/${annotationId}`,
        { ...updatedAnnotation, loanId },
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }
    return response;
  }

  public async deleteAnnotation(
    token: string,
    annotationId: string
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
        `/annotation/${annotationId}`,
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

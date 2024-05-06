import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import { ResponseGlobal } from "@modules/core/interfaces/data-interfaces";
import { GeneralIndicators } from "@modules/dashboard/interfaces/data-interfaces";

export class IndicatorsService {
  constructor() {}
  public async getGeneralIndicators(
    token: string
  ): Promise<ResponseGlobal<GeneralIndicators>> {
    let response: ResponseGlobal<GeneralIndicators>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.get<ResponseGlobal<GeneralIndicators>>(
        "/control-panel/indicators",
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

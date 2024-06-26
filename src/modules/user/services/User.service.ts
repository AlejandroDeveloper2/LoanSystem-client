import { AxiosError } from "axios";

import axiosClient from "@config/AxiosClient";

import { ResponseGlobal } from "@modules/core/interfaces/data-interfaces";
import {
  User,
  ProfileDataForm,
  ChangePassDataForm,
} from "@modules/user/interfaces/data-interfaces";

export class UsersService {
  constructor() {}

  public async getUser(
    token: string,
    userId: string
  ): Promise<ResponseGlobal<User>> {
    let response: ResponseGlobal<User>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.get<ResponseGlobal<User>>(
        `/user/${userId}`,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }

    return response;
  }

  public async updateUser(
    token: string,
    userId: string,
    userData: ProfileDataForm
  ): Promise<ResponseGlobal<User>> {
    let response: ResponseGlobal<User>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axiosClient.put<ResponseGlobal<User>>(
        `/user/${userId}`,
        userData,
        config
      );
      response = data;
    } catch (e: unknown) {
      const parsedError: AxiosError = e as AxiosError;
      throw new AxiosError(parsedError.message);
    }

    return response;
  }

  public async updateUserPassword(
    token: string,
    userData: ChangePassDataForm
  ): Promise<ResponseGlobal<User>> {
    let response: ResponseGlobal<User>;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      console.log(userData);
      const { data } = await axiosClient.patch<ResponseGlobal<User>>(
        "/user/change-password",
        {
          password: userData.currentPassword,
          newPassword: userData.newPassword,
        },
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
}

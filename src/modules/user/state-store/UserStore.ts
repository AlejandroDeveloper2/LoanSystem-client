import { create } from "zustand";
import { toast } from "react-toastify";

import { UsersService } from "@modules/user/services/User.service";

import { ResponseGlobal } from "@modules/core/interfaces/data-interfaces";
import {
  User,
  ProfileDataForm,
  ChangePassDataForm,
} from "@modules/user/interfaces/data-interfaces";
import { UserStore } from "@modules/user/interfaces/store-interfaces";

const userService = new UsersService();

const useUserStore = create<UserStore>((set) => ({
  user: null,
  getUser: async (
    userId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";

    try {
      toggleLoading("Cargando información...", true);
      const { body: user }: ResponseGlobal<User> = await userService.getUser(
        token,
        userId
      );
      set({ user });
    } catch (e: unknown) {
      toast.error(
        "¡Ha ocurrido un error al cargar la información del usuario!"
      );
    } finally {
      toggleLoading("", false);
    }
  },
  updateUser: async (
    userId: string,
    userData: ProfileDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Actualizando usuario...", true);
      const { body: user }: ResponseGlobal<User> = await userService.updateUser(
        token,
        userId,
        userData
      );
      set({ user });
      toast.success("¡Perfil actualizado satisfactoriamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al editar el perfil de usuario!");
    } finally {
      toggleLoading("", false);
    }
  },

  updateUserPassword: async (
    userData: ChangePassDataForm,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Actualizando usuario...", true);
      const { body: user }: ResponseGlobal<User> =
        await userService.updateUserPassword(token, userData);
      set({ user });
      toast.success("¡La contraseña se ha cambiado satisfactoriamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al editar la contraseña!");
    } finally {
      toggleLoading("", false);
    }
  },
}));

export default useUserStore;

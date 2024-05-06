import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { ChangePassDataForm } from "@modules/user/interfaces/data-interfaces";

export const initialValues: ChangePassDataForm = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const initialErrors: WrongInput = {
  currentPassword: {
    message: "",
    error: false,
  },
  newPassword: {
    message: "",
    error: false,
  },
  confirmPassword: {
    message: "",
    error: false,
  },
};

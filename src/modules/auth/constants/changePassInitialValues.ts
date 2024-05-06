import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { ChangePasswordFormData } from "@modules/auth/interfaces/data-interfaces";

export const initialValues: ChangePasswordFormData = {
  password: "",
  confirmPassword: "",
};

export const initialErrors: WrongInput = {
  password: {
    message: "",
    error: false,
  },

  confirmPassword: {
    message: "",
    error: false,
  },
};

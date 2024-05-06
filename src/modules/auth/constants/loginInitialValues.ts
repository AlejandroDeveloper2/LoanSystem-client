import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { LoginFormData } from "@modules/auth/interfaces/data-interfaces";

export const initialValues: LoginFormData = {
  email: "",
  password: "",
};

export const initialErrors: WrongInput = {
  email: {
    message: "",
    error: false,
  },

  password: {
    message: "",
    error: false,
  },
};

import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { RecoverPassFormData } from "@modules/auth/interfaces/data-interfaces";

export const initialValues: RecoverPassFormData = {
  email: "",
};

export const initialErrors: WrongInput = {
  email: {
    message: "",
    error: false,
  },
};

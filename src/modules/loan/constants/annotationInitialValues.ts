import { WrongInput } from "@modules/core/interfaces/data-interfaces";

export const initialValues = {
  title: "",
  description: "",
};

export const initialErrors: WrongInput = {
  title: {
    message: "",
    error: false,
  },
  description: {
    message: "",
    error: false,
  },
};

import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { LoanDataForm } from "../interfaces/data-interfaces";

export const initialValues: LoanDataForm = {
  client: "",
  amount: 0,
  paymentCycle: "Mensual",
  deadline: 0,
};

export const initialErrors: WrongInput = {
  client: {
    message: "",
    error: false,
  },
  amount: {
    message: "",
    error: false,
  },

  paymentCycle: {
    message: "",
    error: false,
  },

  deadline: {
    message: "",
    error: false,
  },
};

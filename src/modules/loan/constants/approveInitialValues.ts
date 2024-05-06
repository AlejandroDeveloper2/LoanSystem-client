import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { ApproveLoanDataForm } from "../interfaces/data-interfaces";

export const initialValues: ApproveLoanDataForm = {
  amount: 0,
  paymentCycle: "Mensual",
  interest: 0,
  deadline: 0,
  firstPaymentDate: "",
  numberOfQuotas: 0,
};

export const initialErrors: WrongInput = {
  amount: {
    message: "",
    error: false,
  },
  paymentCycle: {
    message: "",
    error: false,
  },

  interest: {
    message: "",
    error: false,
  },

  deadline: {
    message: "",
    error: false,
  },
  firstPaymentDate: {
    message: "",
    error: false,
  },
  numberOfQuotas: {
    message: "",
    error: false,
  },
};

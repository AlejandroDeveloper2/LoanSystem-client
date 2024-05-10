import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { PartialPaymentDataForm } from "../interfaces/data-interfaces";

export const initialValues: PartialPaymentDataForm = {
  balance: 0,
  isFullPayment: true,
  interests: 0,
};

export const initialErrors: WrongInput = {
  balance: {
    message: "",
    error: false,
  },
  interests: {
    message: "",
    error: false,
  },
  isFullPayment: {
    message: "",
    error: false,
  },
};

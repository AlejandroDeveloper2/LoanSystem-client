import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { BankAccountDataForm } from "@modules/loan-request/interfaces/data-interfaces";

export const initialValues: BankAccountDataForm = {
  accountType: "",
  bank: "",
  name: "",
  accountNumber: "",
};

export const initialErrors: WrongInput = {
  accountType: {
    message: "",
    error: false,
  },

  bank: {
    message: "",
    error: false,
  },
  name: {
    message: "",
    error: false,
  },
  accountNumber: {
    message: "",
    error: false,
  },
};

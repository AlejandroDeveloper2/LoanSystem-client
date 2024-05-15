import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { ApplicationFormData } from "../interfaces/data-interfaces";

export const initialValues: ApplicationFormData = {
  fullName: "",
  phone: "",
  email: "",
  amount: "",
  identification: "",
  workLetter: "",
  payrollStatements: "",
};

export const initialErrors: WrongInput = {
  fullName: {
    message: "",
    error: false,
  },
  phone: {
    message: "",
    error: false,
  },
  email: {
    message: "",
    error: false,
  },
  amount: {
    message: "",
    error: false,
  },
  identification: {
    message: "",
    error: false,
  },
  workLetter: {
    message: "",
    error: false,
  },
  payrollStatements: {
    message: "",
    error: false,
  },
};

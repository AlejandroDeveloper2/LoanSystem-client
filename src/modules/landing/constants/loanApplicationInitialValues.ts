import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { ApplicationFormData } from "../interfaces/data-interfaces";

export const initialValues: ApplicationFormData = {
  fullName: "",
  phone: "",
  email: "",
  amount: "",
  jobPlace: "",
  // monthlySalary: "",
  // hasWorkLetter: "",
  // hasLastAccountStates: "",
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
  jobPlace: {
    message: "",
    error: false,
  },
  // monthlySalary: {
  //   message: "",
  //   error: false,
  // },
  // hasWorkLetter: {
  //   message: "",
  //   error: false,
  // },
  // hasLastAccountStates: {
  //   message: "",
  //   error: false,
  // },
};

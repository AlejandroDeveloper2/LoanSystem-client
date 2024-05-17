import { WrongInput } from "@modules/core/interfaces/data-interfaces";
import { ApplicationFormData } from "../interfaces/data-interfaces";

export const initialValues: ApplicationFormData = {
  fullName: "",
  phone: "",
  email: "",
  amount: "",
  extraInfo:
    "1. -Salario Mensual:$____ ;\n 2. -Lugar de trabajo:____ ;\n 3. -¿Tiene carta de trabajo?:____;\n 4. -¿Tiene los últimos 3 estados de cuenta de su nómina?:____;",
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
  extraInfo: {
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

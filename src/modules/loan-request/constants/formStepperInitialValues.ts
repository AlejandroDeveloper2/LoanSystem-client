import { StepperDataForm } from "@modules/loan-request/interfaces/data-interfaces";

export const initialStepperFormValues: StepperDataForm = {
  client: {
    email: "",
    fullName: "",
    typeOfIdentification: "",
    identification: "",
    phone: "",
    civilStatus: "",
    profession: "",
    address: "",
    houseNumber: "",
    sector: "",
    city: "",
    typeOfResidence: "",
  },
  workingInformation: {
    companyName: "",
    phone: "",
    address: "",
    timeWorking: 0,
    position: "",
    bossName: "",
    bossPhone: "",
    salary: 0,
    paymentOfPayroll: "Mensual",
    otherIncome: 0,
    description: "",
  },
  loan: {
    amount: 0,
    paymentCycle: "Mensual",
    deadline: 0,
    description: "",
  },
  bankAccount: {
    accountType: "",
    bank: "",
    name: "",
    accountNumber: "",
  },
  personalReference: {
    reference: [
      { name: "", phone: "" },
      { name: "", phone: "" },
      { name: "", phone: "" },
      { name: "", phone: "" },
    ],
    interaction: "",
    referred: {
      name: "",
      phone: "",
    },
  },
};

import { PaymentType } from "@modules/loan/interfaces/data-interfaces";

type ReferredType = {
  name: string;
  phone: string;
};

type StepperFormNameType =
  | "client"
  | "workingInformation"
  | "loan"
  | "bankAccount"
  | "personalReference";

interface PersonalDataForm {
  email: string;
  fullName: string;
  typeOfIdentification: string;
  identification: string;
  phone: string;
  civilStatus: string;
  profession: string;
  address: string;
  houseNumber: string;
  sector: string;
  city: string;
  typeOfResidence: string;
}

interface WorkDataForm {
  companyName: string;
  phone: string;
  address: string;
  timeWorking: number;
  position: string;
  bossName: string;
  bossPhone: string;
  salary: number;
  paymentOfPayroll: PaymentType;
  otherIncome: number;
  description: string;
}

interface LoanDataForm {
  amount: number;
  paymentCycle: PaymentType;
  deadline: number;
  description: string;
}

interface BankAccountDataForm {
  accountType: string;
  bank: string;
  name: string;
  accountNumber: string;
}

interface ReferencesDataForm {
  firstRelativeNames: string;
  firstRelativePhone: string;
  secondRelativeNames: string;
  secondRelativePhone: string;
  firstFriendNames: string;
  firstFriendPhone: string;
  secondFriendNames: string;
  secondFriendPhone: string;
  interaction: string;
  referredName: string;
  referredPhone: string;
}

interface ReferencesData {
  reference: ReferredType[];
  interaction: string;
  referred: ReferredType;
}

interface RequestFormData {
  client: PersonalDataForm;
  workingInformation: WorkDataForm;
  loan: LoanDataForm;
  bankAccount: BankAccountDataForm;
  personalReference: ReferencesData;
}

interface StepperDataForm {
  client: PersonalDataForm;
  workingInformation: WorkDataForm;
  loan: LoanDataForm;
  bankAccount: BankAccountDataForm;
  personalReference: ReferencesData;
}

interface FormStepData {
  stepName: string;
  completedForms: number;
  formData: StepperDataForm;
}

export type {
  ReferredType,
  StepperFormNameType,
  PersonalDataForm,
  WorkDataForm,
  LoanDataForm,
  BankAccountDataForm,
  ReferencesDataForm,
  ReferencesData,
  RequestFormData,
  StepperDataForm,
  FormStepData,
};

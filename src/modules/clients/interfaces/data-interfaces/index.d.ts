import {
  PersonalDataForm,
  WorkDataForm,
  BankAccountDataForm,
} from "@modules/loan-request/interfaces/data-interfaces";
import { PaymentType } from "@modules/loan/interfaces/data-interfaces";

interface UpdateClientDataForm extends PersonalDataForm {
  companyName: string;
  companyPhone: string /*Campo modificado */;
  companyAddress: string /*campo modificado */;
  timeWorking: number;
  position: string;
  bossName: string;
  bossPhone: string;
  salary: number;
  paymentOfPayroll: PaymentType;
  otherIncome: number;
  description: string;
  accountType: string;
  bank: string;
  name: string;
  accountNumber: string;
}

interface Client extends PersonalDataForm {
  id: string;
  workingInformation: WorkDataForm;
  bankAccount: BankAccountDataForm;
  createdAt?: string;
}

interface ClientsFilters {
  initialDate: string;
  finalDate: string;
}

export type { UpdateClientDataForm, Client, ClientsFilters };

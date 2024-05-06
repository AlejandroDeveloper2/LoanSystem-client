import { Pagination } from "@modules/core/interfaces/data-interfaces";
import {
  Loan,
  LoanIndicator,
  PaymentIndicator,
} from "../interfaces/data-interfaces";

export const loan: Loan = {
  id: "",
  createdAt: "",
  amount: 0,
  paymentCycle: "Semanal",
  deadline: 0,
  client: {
    id: "",
    workingInformation: {
      companyName: "",
      phone: "",
      address: "",
      timeWorking: 0,
      position: "",
      bossName: "",
      bossPhone: "",
      salary: 0,
      paymentOfPayroll: "Semanal",
      otherIncome: 0,
      description: "",
    },
    bankAccount: {
      accountType: "",
      bank: "",
      name: "",
      accountNumber: "",
    },
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
  loanState: "Pendiente",
  interest: 0,
  earnings: 0,
  firstPaymentDate: "",
  paymentSchedules: [],
  numberOfPayments: "",
  numberOfQuotas: 0,
  amountInterest: 0,
  isFullPayment: false,
  balance: 0,
  simplePromissoryNote: null,
  notarialPromissoryNote: null,
  specialPower: null,
};

export const loanIndicators: LoanIndicator = {
  totalInvestedCapital: 0,
  investedCapital: 0,
  totalActiveLoans: 0,
  activeLoans: 0,
  totalLoansPaid: 0,
  loansPaid: 0,
  earnings: 0,
};

export const pagination: Pagination = {
  page: 0,
  totalPages: 0,
  totalElements: 0,
  limit: "",
};

export const notePagination: Pagination = { ...pagination };

export const paymentIndicators: PaymentIndicator = {
  totalBalance: 0,
  raisedMoney: 0,
  paymentsMade: 0,
  overduePayments: 0,
};

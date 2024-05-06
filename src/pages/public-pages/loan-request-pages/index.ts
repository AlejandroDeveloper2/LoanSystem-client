import { lazy } from "react";

const PersonalInfoPage = lazy(() => import("./PersonalInfoPage"));
const WorkInfoPage = lazy(() => import("./WorkInfoPage"));
const LoanInfoPage = lazy(() => import("./LoanInfoPage"));
const BankInfoPage = lazy(() => import("./BankInfoPage"));
const ReferencesInfoPage = lazy(() => import("./ReferencesInfoPage"));
const ValidationPage = lazy(() => import("./ValidationPage"));

export {
  PersonalInfoPage,
  WorkInfoPage,
  LoanInfoPage,
  BankInfoPage,
  ReferencesInfoPage,
  ValidationPage,
};

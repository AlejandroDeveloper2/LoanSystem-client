import { Step } from "@modules/core/interfaces/data-interfaces";

export const steps: Step[] = [
  {
    label: "Datos personales",
    to: "/loanRequest/personalInfo",
  },
  {
    label: "Información laboral",
    to: "/loanRequest/workInfo",
  },
  {
    label: "Datos del préstamo",
    to: "/loanRequest/loanInfo",
  },
  {
    label: "Cuenta bancaria",
    to: "/loanRequest/bankInfo",
  },
  {
    label: "Referencias personales",
    to: "/loanRequest/referencesInfo",
  },
];

import { Edit, Eye } from "iconoir-react";
import { NavigateFunction } from "react-router-dom";

import { Auth, UserRoleType } from "@modules/auth/interfaces/data-interfaces";
import { BadgeVariantType } from "@modules/core/interfaces/components-interfaces/BadgeProps";
import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";
import {
  Loan,
  LoanStateType,
  PaymentSchedule,
  PaymentStatusType,
  PaymentType,
  PromissoryNoteType,
} from "@modules/loan/interfaces/data-interfaces";

import { loanOptionsData } from "@modules/loan/constants/loansTableData";
import { paymentScheduleOptiosData } from "../constants/paymentScheduleTableData";
import { annotationOptionsData } from "../constants/annotationTableData";

export const getPaymentCycleBadgeMark = (
  paymentCycle: PaymentType | string
): BadgeVariantType => {
  const paymentCycleMod: PaymentType = paymentCycle as PaymentType;
  const badgeVariant: BadgeVariantType =
    paymentCycleMod === "Mensual"
      ? "primary"
      : paymentCycleMod === "Quincenal"
      ? "neutral"
      : "light";
  return badgeVariant;
};

export const getLoanStatus = (
  loanState: LoanStateType | string
): BadgeVariantType => {
  const loanStateMod: LoanStateType = loanState as LoanStateType;
  const badgeVariant: BadgeVariantType =
    loanStateMod === "Aprobado"
      ? "primary"
      : loanStateMod === "Cancelado"
      ? "danger"
      : loanStateMod === "Pagado"
      ? "warning"
      : "light";
  return badgeVariant;
};

export const getPaymentStatus = (
  paymentState: PaymentStatusType | string
): BadgeVariantType => {
  const paymentStateMod: PaymentStatusType = paymentState as PaymentStatusType;
  const badgeVariant: BadgeVariantType =
    paymentStateMod === "Pagado"
      ? "primary"
      : paymentStateMod === "Mora"
      ? "danger"
      : paymentStateMod === "Pendiente"
      ? "warning"
      : "light";
  return badgeVariant;
};

export const getUpdateLoan = (
  loan: Loan,
  fileType: PromissoryNoteType,
  hrefDocument: string
): Loan => {
  if (fileType === "simple")
    return { ...loan, simplePromissoryNote: hrefDocument };
  else if (fileType === "notarial")
    return { ...loan, notarialPromissoryNote: hrefDocument };
  else return { ...loan, specialPower: hrefDocument };
};

export const getEditLoanTableOption = (
  loan: Loan,
  navigate: NavigateFunction
): IconOnlyButtonProps => {
  const editOption = loanOptionsData.filter(
    (option) => option.id === "btn-edit-loan"
  )[0];
  return {
    ...editOption,
    Icon: loan.loanState !== "Pendiente" ? Eye : Edit,
    variant: loan.loanState !== "Pendiente" ? "primary" : "warning",
    title:
      loan.loanState !== "Pendiente"
        ? "Ver detalle del préstamo"
        : "Editar préstamo",
    onClick: () => navigate(`/userPanel/loans/${loan.id}`),
  };
};

export const getDeleteLoanOption = (
  loan: Loan,
  auth: Auth | null,
  toggleDialogDelete: () => void,
  updateLoanId: (id: string) => void
): IconOnlyButtonProps => {
  const userRole: UserRoleType = auth ? auth.roles : "ADMINISTRADOR";
  const deleteOption = loanOptionsData.filter(
    (option) => option.id === "btn-delete-loan"
  )[0];
  return {
    ...deleteOption,
    disabled: userRole === "ADMINISTRADOR" ? undefined : true,
    onClick: () => {
      toggleDialogDelete();
      updateLoanId(loan.id);
    },
  };
};

export const getLoanAnnotationOption = (
  loan: Loan,
  navigate: NavigateFunction
): IconOnlyButtonProps => {
  const annotationOption = loanOptionsData.filter(
    (option) => option.id === "btn-see-annotations"
  )[0];

  return {
    ...annotationOption,
    disabled: loan.loanState === "Cancelado" || loan.loanState === "Pendiente",
    onClick: () => {
      navigate(`/userPanel/loans/annotations/${loan.id}`);
    },
  };
};

export const getCancelLoanOption = (
  loan: Loan,
  auth: Auth | null,
  toggleDialog: () => void,
  updateElementId: (id: string) => void
): IconOnlyButtonProps => {
  const userRole: UserRoleType = auth ? auth.roles : "ADMINISTRADOR";
  const cancelOption = loanOptionsData.filter(
    (option) => option.id === "btn-cancel-loan"
  )[0];

  return {
    ...cancelOption,
    disabled:
      loan.loanState !== "Pendiente"
        ? true
        : userRole === "ADMINISTRADOR"
        ? undefined
        : true,
    onClick: () => {
      toggleDialog();
      updateElementId(loan.id);
    },
  };
};

export const calculateNumberOfQuotas = (
  loanTime: number,
  paymentCycle: PaymentType
): number => {
  if (paymentCycle === "Mensual") return loanTime * 1;
  if (paymentCycle === "Quincenal") return loanTime * 2;
  return loanTime * 4;
};

export const getViewTicketOption = (
  paymentSchedule: PaymentSchedule,
  loan: Loan,
  clickFunction: () => void
): IconOnlyButtonProps => {
  const viewTicketOption = paymentScheduleOptiosData.filter(
    (option) => option.id === "btn-view-ticket"
  )[0];

  return {
    ...viewTicketOption,
    disabled:
      paymentSchedule.paymentStatus === "Pagado" &&
      loan.loanState !== "Pendiente"
        ? undefined
        : true,
    onClick: () => {
      clickFunction();
    },
  };
};

export const getPayQuotaOption = (
  paymentSchedule: PaymentSchedule,
  loan: Loan,
  clickFunction: () => void
): IconOnlyButtonProps => {
  const payQuotaOption = paymentScheduleOptiosData.filter(
    (option) => option.id === "btn-pay-quota"
  )[0];
  return {
    ...payQuotaOption,
    disabled:
      paymentSchedule.paymentStatus === "Pagado" ||
      loan.loanState === "Pendiente"
        ? true
        : undefined,
    onClick: () => {
      clickFunction();
    },
  };
};

export const getDeleteAnnotationOption = (clickFunction: () => void) => {
  const deleteOption = annotationOptionsData.filter(
    (option) => option.id === "btn-delete"
  )[0];
  return {
    ...deleteOption,
    onClick: () => {
      clickFunction();
    },
  };
};

export const getEditAnnotationOption = (clickFunction: () => void) => {
  const editOption = annotationOptionsData.filter(
    (option) => option.id === "btn-edit"
  )[0];
  return {
    ...editOption,
    onClick: () => {
      clickFunction();
    },
  };
};

export const calculateQuotaMora = (
  quotaAmount: number,
  paymentCycle: PaymentType
): number => {
  const interestPercentage: number = 0.1;
  if (paymentCycle === "Mensual") return quotaAmount * interestPercentage;
  if (paymentCycle === "Quincenal")
    return quotaAmount * (interestPercentage / 2);
  return quotaAmount * (interestPercentage / 4);
};

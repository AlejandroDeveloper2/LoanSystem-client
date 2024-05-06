import { Cash, Coins, CoinsSwap, DollarCircle, HandCash } from "iconoir-react";

import {
  LoanIndicator,
  PaymentIndicator,
} from "@modules/loan/interfaces/data-interfaces";
import { CardProps } from "@modules/core/interfaces/components-interfaces/CardProps";

import { formatMoney } from "@modules/core/utils/helpers";

export const getIndicatorCards = (
  loanIndicators: LoanIndicator,
  paymentIndicators: PaymentIndicator,
  loadingIndicator: boolean
): CardProps[] => {
  return [
    {
      title: "Total capital invertido",
      value: formatMoney(loanIndicators?.totalInvestedCapital),
      Icon: Coins,
      captionText: "General",
      variant: "primary",
      loading: loadingIndicator,
    },
    {
      title: "Capital invertido",
      value: formatMoney(loanIndicators?.totalInvestedCapital),
      Icon: Coins,
      captionText: "Mes Actual",
      variant: "light",
      loading: loadingIndicator,
    },
    {
      title: "Total préstamos activos",
      value: String(loanIndicators.totalActiveLoans),
      Icon: DollarCircle,
      captionText: "General",
      variant: "primary",
      loading: loadingIndicator,
    },
    {
      title: "Préstamos activos",
      value: String(loanIndicators.activeLoans),
      Icon: DollarCircle,
      captionText: "Mes Actual",
      variant: "light",
      loading: loadingIndicator,
    },
    {
      title: "Total Préstamos pagados",
      value: String(loanIndicators.totalLoansPaid),
      Icon: HandCash,
      captionText: "General",
      variant: "primary",
      loading: loadingIndicator,
    },
    {
      title: "Prestamos pagados",
      value: String(loanIndicators.loansPaid),
      Icon: HandCash,
      captionText: "Mes Actual",
      variant: "light",
      loading: loadingIndicator,
    },
    {
      title: "Total dinero recaudado",
      value: formatMoney(paymentIndicators.totalBalance),
      Icon: Coins,
      captionText: "General",
      variant: "primary",
      loading: loadingIndicator,
    },
    {
      title: "Dinero recaudado Hoy",
      value: formatMoney(paymentIndicators.raisedMoney),
      Icon: Coins,
      captionText: "Hoy",
      variant: "light",
      loading: loadingIndicator,
    },
    {
      title: "Pagos realizados hoy",
      value: String(paymentIndicators.paymentsMade),
      Icon: CoinsSwap,
      captionText: "Hoy",
      variant: "primary",
      loading: loadingIndicator,
    },
    {
      title: "Total pagos en mora",
      value: String(paymentIndicators.overduePayments),
      Icon: Cash,
      captionText: "General",
      variant: "danger",
      loading: loadingIndicator,
    },
  ];
};

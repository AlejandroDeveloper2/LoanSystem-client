import {
  Cash,
  Coins,
  Commodity,
  DollarCircle,
  GoogleDocs,
  Group,
  HandCash,
} from "iconoir-react";

import { CardProps } from "@modules/core/interfaces/components-interfaces/CardProps";
import { formatMoney } from "@modules/core/utils/helpers";
import { GeneralIndicators } from "@modules/dashboard/interfaces/data-interfaces";

export const getIndicatorCards = (
  generalIndicators: GeneralIndicators,
  loading: boolean,
  toggleOperationalExpensesModal: () => void
): CardProps[] => {
  return [
    {
      title: "Total Clientes",
      value: String(generalIndicators.totalClients),
      Icon: Group,
      captionText: "General",
      variant: "primary",
      moreDetailsLink: "/userPanel/clients",
      loading,
    },
    {
      title: "Total Solicitudes",
      value: String(generalIndicators.totalRequest),
      Icon: GoogleDocs,
      captionText: "General",
      variant: "neutral",
      moreDetailsLink: "/userPanel/loanRequests",
      loading,
    },
    {
      title: "Total capital invertido",
      value: formatMoney(generalIndicators.totalCapitalInvested),
      Icon: Coins,
      captionText: "General",
      variant: "light",
      moreDetailsLink: "/userPanel/loans",
      loading: loading,
    },
    {
      title: "Total préstamos activos",
      value: String(generalIndicators.totalActiveLoans),
      Icon: DollarCircle,
      captionText: "General",
      variant: "primary",
      moreDetailsLink: "/userPanel/loans",
      loading,
    },
    {
      title: "Proyección de ganancias",
      value: formatMoney(generalIndicators.totalProfits),
      Icon: Commodity,
      captionText: "General",
      variant: "warning",
      moreDetailsLink: "/userPanel/loans",
      loading: loading,
    },
    {
      title: "Ganancias recaudadas",
      value: formatMoney(generalIndicators.profitsCollected),
      Icon: Coins,
      captionText: "General",
      variant: "warning",
      moreDetailsLink: "/userPanel/loans",
      loading: loading,
    },
    {
      title: "Total Préstamos pagados",
      value: String(generalIndicators.totalLoansPaid),
      Icon: HandCash,
      captionText: "General",
      variant: "primary",
      moreDetailsLink: "/userPanel/loans",
      loading,
    },
    {
      title: "Total pagos en mora",
      value: String(generalIndicators.totalLoansInArrears),
      Icon: Cash,
      captionText: "General",
      variant: "danger",
      moreDetailsLink: "/userPanel/loans",
      loading,
    },
    {
      title: "Gastos operativos",
      value: formatMoney(generalIndicators.legalExpensesTotal),
      Icon: HandCash,
      captionText: "Mensual",
      variant: "warning",
      onClick: toggleOperationalExpensesModal,
      loading,
    },
  ];
};

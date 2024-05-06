import {
  Calendar,
  Hashtag,
  Cash,
  SwitchOff,
  Eye,
  Settings,
  HandCash,
} from "iconoir-react";

import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";
import {
  TableHeaderType,
  Columnkey,
} from "@modules/core/interfaces/components-interfaces/TableProps";

export const headers: TableHeaderType[] = [
  { label: "N° de cuota", Icon: Hashtag },
  { label: "Referencia de pago", Icon: Hashtag },
  { label: "Fecha de pago", Icon: Calendar },
  { label: "Monto cuota", Icon: Cash },
  { label: "Monto pagado", Icon: HandCash },
  { label: "Monto pendiente", Icon: Cash },
  { label: "Estado de cuota", Icon: SwitchOff },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  {
    key: "quotaNumber",
    badgeValue: false,
    fieldType: "text",
    subKeys: [],
  },
  {
    key: "paymentReference",
    badgeValue: false,
    fieldType: "text",
    subKeys: [],
  },
  { key: "paymentDate", badgeValue: false, fieldType: "date", subKeys: [] },
  {
    key: "amount",
    badgeValue: false,
    fieldType: "currency",
    subKeys: [],
  },
  {
    key: "balancePaid",
    badgeValue: false,
    fieldType: "currency",
    subKeys: [],
  },
  {
    key: "outstandingBalance",
    badgeValue: false,
    fieldType: "currency",
    subKeys: [],
  },
  {
    key: "paymentStatus",
    badgeValue: true,
    fieldType: "text",
    subKeys: [],
  },
];

export const paymentScheduleOptiosData: IconOnlyButtonProps[] = [
  {
    Icon: Cash,
    id: "btn-pay-quota",
    type: "button",
    title: "Pagar cuota",
    variant: "primary",
    loading: false,
    onClick: () => {},
  },
  {
    Icon: Eye,
    id: "btn-view-ticket",
    type: "button",
    title: "Ver recibo de pago",
    variant: "neutral",
    loading: false,
    onClick: () => {},
  },
];

import {
  Calendar,
  Cash,
  Check,
  Eye,
  Settings,
  SwitchOff,
  Triangle,
  User,
  Xmark,
} from "iconoir-react";

import {
  Columnkey,
  TableHeaderType,
} from "@modules/core/interfaces/components-interfaces/TableProps";
import {
  IconButtonProps,
  IconOnlyButtonProps,
} from "@modules/core/interfaces/components-interfaces/ButtonProps";

export const headers: TableHeaderType[] = [
  { label: "Solicitante", Icon: User },
  { label: "Fecha de solicitud", Icon: Calendar },
  { label: "Monto solicitado", Icon: Cash },
  { label: "Estado", Icon: SwitchOff },
  { label: "Tipo de préstamo", Icon: Triangle },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  { key: "fullName", badgeValue: false, fieldType: "text", subKeys: [] },
  { key: "createdAt", badgeValue: false, fieldType: "date", subKeys: [] },
  { key: "amount", badgeValue: false, fieldType: "currency", subKeys: [] },
  { key: "state", badgeValue: true, fieldType: "text", subKeys: [] },
  { key: "paymentCycle", badgeValue: true, fieldType: "text", subKeys: [] },
];

export const clientRequestOptionsData: IconOnlyButtonProps[] = [
  {
    Icon: Check,
    id: "btn-approve",
    type: "button",
    title: "Aprobar solicitud de préstamo",
    variant: "primary",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Xmark,
    id: "btn-reject",
    type: "button",
    title: "Rechazar solicitud de préstamo",
    variant: "danger",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Eye,
    id: "btn-view",
    type: "button",
    title: "Ver detalles de la solicitud",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
];

export const filterOptions: IconButtonProps[] = [
  {
    Icon: Calendar,
    label: "Mensual",
    id: "Mensual",
    type: "button",
    title: "Filtrar por modalidad mensual",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Calendar,
    label: "Quincenal",
    id: "Quincenal",
    type: "button",
    title: "Filtrar por modalidad quincenal",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Calendar,
    label: "Semanal",
    id: "Semanal",
    type: "button",
    title: "Filtrar por modalidad semanal",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Calendar,
    label: "Todos",
    id: "Todo",
    type: "button",
    title: "Filtrar por todas las modalidades",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
];

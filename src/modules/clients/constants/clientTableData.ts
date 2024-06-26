import {
  AtSign,
  Calendar,
  Edit,
  Filter,
  Hashtag,
  Phone,
  Settings,
  User,
} from "iconoir-react";

import {
  IconOnlyButtonProps,
  IconButtonProps,
} from "@modules/core/interfaces/components-interfaces/ButtonProps";
import {
  TableHeaderType,
  Columnkey,
} from "@modules/core/interfaces/components-interfaces/TableProps";

export const headers: TableHeaderType[] = [
  { label: "Fecha de creación", Icon: Calendar },
  { label: "Nombres", Icon: User },
  { label: "Número de documento", Icon: Hashtag },
  { label: "Correo electrónico", Icon: AtSign },
  { label: "Número de teléfono", Icon: Phone },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  { key: "createdAt", badgeValue: false, fieldType: "date", subKeys: [] },
  { key: "fullName", badgeValue: false, fieldType: "text", subKeys: [] },
  { key: "identification", badgeValue: false, fieldType: "text", subKeys: [] },
  { key: "email", badgeValue: false, fieldType: "text", subKeys: [] },
  { key: "phone", badgeValue: false, fieldType: "text", subKeys: [] },
];

export const clientOptionsData: IconOnlyButtonProps[] = [
  {
    Icon: Edit,
    id: "btn-edit",
    type: "button",
    title: "Editar información de cliente",
    variant: "warning",
    loading: false,
    onClick: () => console.log(""),
  },
];

export const filterOptions: IconButtonProps[] = [
  {
    Icon: Filter,
    label: "Ordenar por más reciente",
    id: "DESC",
    type: "button",
    title: "ordenar por orden de creación",
    variant: "neutral",
    loading: false,
    onClick: () => console.log(""),
  },
  {
    Icon: Filter,
    label: "Ordenar por más antiguo",
    id: "ASC",
    type: "button",
    title: "Ordenar por orden de creación",
    variant: "primary",
    loading: false,
    onClick: () => console.log(""),
  },
];

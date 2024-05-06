import {
  Calendar,
  Edit,
  Filter,
  Hashtag,
  Settings,
  Trash,
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
  { label: "Titulo de nota", Icon: User },
  { label: "Descripción", Icon: Hashtag },
  { label: "Opciones", Icon: Settings },
];

export const columnKeys: Columnkey[] = [
  { key: "createdAt", badgeValue: false, fieldType: "date", subKeys: [] },
  { key: "title", badgeValue: false, fieldType: "text", subKeys: [] },
  { key: "description", badgeValue: false, fieldType: "text", subKeys: [] },
];

export const annotationOptionsData: IconOnlyButtonProps[] = [
  {
    Icon: Edit,
    id: "btn-edit",
    type: "button",
    title: "Editar anotación",
    variant: "warning",
    loading: false,
    onClick: () => {},
  },
  {
    Icon: Trash,
    id: "btn-delete",
    type: "button",
    title: "Eliminar anotación",
    variant: "danger",
    loading: false,
    onClick: () => {},
  },
];

export const filterOptions: IconButtonProps[] = [
  {
    Icon: Filter,
    label: "Ordenar por más reciente",
    id: "DESC",
    type: "button",
    title: "Ordenar por orden de creación",
    variant: "neutral",
    loading: false,
    onClick: () => {},
  },
  {
    Icon: Filter,
    label: "Ordenar por más antiguo",
    id: "ASC",
    type: "button",
    title: "Ordenar por orden de creación",
    variant: "primary",
    loading: false,
    onClick: () => {},
  },
];

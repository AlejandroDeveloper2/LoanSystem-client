import currency from "currency.js";
import { Location } from "react-router-dom";

import { BadgeVariantType } from "@modules/core/interfaces/components-interfaces/BadgeProps";
import { Columnkey } from "@modules/core/interfaces/components-interfaces/TableProps";
import { IllustrationData } from "@modules/core/interfaces/data-interfaces";

import {
  getLoanStatus,
  getPaymentCycleBadgeMark,
  getPaymentStatus,
} from "@modules/loan/utils/helpers";

import {
  IllustrationChangePass,
  IllustrationLogin,
  IllustrationRecoverPass,
} from "@assets/images";

export const formatDate = (
  date: string,
  format: "numeric" | "mixted" = "mixted"
): string => {
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const numericDate = new Date(date).toLocaleDateString();

  if (format === "mixted") return formattedDate;
  return numericDate;
};

export const formatMoney = (moneyValue: number): string => {
  const formattedValue = currency(moneyValue, {
    symbol: "$",
    pattern: "! #",
    separator: ".",
    decimal: ",",
  });
  return formattedValue.format();
};

export const getBadgeVariant = (
  fieldKey: string,
  fieldValue: string
): BadgeVariantType => {
  if (fieldKey === "paymentCycle") {
    return getPaymentCycleBadgeMark(fieldValue);
  }
  if (fieldKey === "loanState") {
    return getLoanStatus(fieldValue);
  }
  if (fieldKey === "paymentStatus") {
    return getPaymentStatus(fieldValue);
  }
  return "light";
};

export const getRowValue = <T>(columnKey: Columnkey, record: T) => {
  const rowValue: string | number =
    columnKey.fieldType === "currency"
      ? formatMoney(Object(record)[columnKey.key])
      : columnKey.fieldType === "date"
      ? formatDate(Object(record)[columnKey.key])
      : columnKey.fieldType === "subField"
      ? columnKey.subKeys.length === 1
        ? Object(record)[columnKey.key][columnKey.subKeys[0]]
        : Object(record)[columnKey.key][columnKey.subKeys[0]][
            columnKey.subKeys[1]
          ]
      : Object(record)[columnKey.key];

  return rowValue;
};

export const setActiveNavItem = (
  location: Location,
  itemTo: string
): string => {
  const locationArray = location.pathname
    .split("/")
    .filter((element) => element !== "");
  const parsedLocation =
    locationArray.length < 2
      ? "/" + locationArray[0]
      : "/" + locationArray[0] + "/" + locationArray[1];

  if (parsedLocation === itemTo) return "linkActive";
  return "link";
};

export const downloadPDFDoc = (file: Blob | null, fileName: string): void => {
  if (file) {
    const href = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", `${fileName}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const loadIllustration = (path: string): IllustrationData | null => {
  const illustrationData =
    path === "/"
      ? { src: IllustrationLogin, alt: "Ilustración login" }
      : path === "/recoverPassword"
      ? {
          src: IllustrationRecoverPass,
          alt: "Ilustración recuperar contraseña",
        }
      : path === "/changePassword"
      ? { src: IllustrationChangePass, alt: "Ilustración cambiar contraseña" }
      : null;
  return illustrationData;
};

export const downloadPdfDoc = (file: Blob | null, fileName: string): void => {
  if (file) {
    const href = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", `${fileName}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

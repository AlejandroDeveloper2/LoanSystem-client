import {
  PaymentType,
  PaymentStatusType,
} from "@modules/loan/interfaces/data-interfaces";

import { RequestFormData } from "@modules/loan-request/interfaces/data-interfaces";

interface ClientRequestFilters {
  requestDate: string;
}

interface ClientRequestData extends RequestFormData {
  id: string;
  createdAt: string;
}

interface ParsedClientRequestData {
  id: string;
  createdAt: string;
  fullName: string;
  amount: number;
  state: string;
  paymentCycle: PaymentType;
  paymentStatus: PaymentStatusType;
}

export type {
  ClientRequestFilters,
  ClientRequestData,
  ParsedClientRequestData,
};

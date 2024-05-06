import { create } from "zustand";

import {
  LoanSlice,
  PaymentScheduleSlice,
  PromissoryNoteSlice,
  AnnotationSlice,
} from "../interfaces/store-interfaces";

import {
  createLoanStoreSlice,
  createPaymentStoreSlice,
  createPromissoryNoteStoreSlice,
  createAnnotationStoreSlice,
} from "./loan-store-slices";

const useLoanStore = create<
  LoanSlice & PaymentScheduleSlice & PromissoryNoteSlice & AnnotationSlice
>((...a) => ({
  ...createLoanStoreSlice(...a),
  ...createPaymentStoreSlice(...a),
  ...createPromissoryNoteStoreSlice(...a),
  ...createAnnotationStoreSlice(...a),
}));

export default useLoanStore;

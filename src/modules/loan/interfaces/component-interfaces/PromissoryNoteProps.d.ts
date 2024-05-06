import { Loan } from "../data-interfaces";
import { Client } from "@modules/clients/interfaces/data-interfaces";

interface SimplePromissoryProps {
  loan: Loan;
  client: Client | null;
}

interface NotarialPromissoryNoteProps extends SimplePromissoryProps {}

interface SpecialPromissoryNoteProps {
  createdAt: string;
  client: Client;
}

export type {
  SimplePromissoryProps,
  NotarialPromissoryNoteProps,
  SpecialPromissoryNoteProps,
};

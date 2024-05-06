import { HandCash } from "iconoir-react";

import { useLoanDetail } from "@modules/loan/hooks";
import { useLoanStore } from "@modules/loan/state-store";

import { InfoSection } from "@modules/core/components";
import {
  ApproveLoanForm,
  ClientInfoSection,
  PromissoryNoteList,
} from "@modules/loan/components";

const LoanDetailPage = (): JSX.Element => {
  const { loanParam } = useLoanDetail();
  const { loan } = useLoanStore();

  return (
    <>
      <h1 className="heading1">
        <HandCash />
        Detalle del préstamo
      </h1>
      <InfoSection
        sectionTitle="Detalles del préstamo"
        labelId="Id de préstamo"
        link="/userPanel/loans"
        recordId={loanParam.loanId}
      />
      <ClientInfoSection />
      {loan.loanState !== "Pendiente" && loan.loanState !== "Cancelado" ? (
        <PromissoryNoteList />
      ) : null}
      <ApproveLoanForm />
    </>
  );
};

export default LoanDetailPage;

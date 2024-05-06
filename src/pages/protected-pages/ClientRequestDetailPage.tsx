import { GoogleDocs } from "iconoir-react";

import { useClientRequestDetail } from "@modules/client-request/hooks";

import { InfoSection, Spinner } from "@modules/core/components";
import {
  BankInfoSection,
  LoanInfoSection,
  PersonalInfoSection,
  ReferencesInfoSection,
  WorkInfoSection,
} from "@modules/client-request/components";

const ClientRequestDetailPage = (): JSX.Element => {
  const { loadingData, request } = useClientRequestDetail();

  return (
    <>
      <h1 className="heading1">
        <GoogleDocs />
        Detalle de solicitud
      </h1>
      <InfoSection
        sectionTitle="Detalles de la solicitud"
        labelId="id de solicitud"
        link="/userPanel/loanRequests"
        recordId={request.loanRequestId}
      />
      {loadingData.loading ? (
        <Spinner
          className="spinnerBarPrimary"
          message={loadingData.loadingMessage}
        />
      ) : (
        <>
          <PersonalInfoSection />
          <WorkInfoSection />
          <LoanInfoSection />
          <BankInfoSection />
          <ReferencesInfoSection />
        </>
      )}
    </>
  );
};

export default ClientRequestDetailPage;

import { GoogleDocs } from "iconoir-react";

import { RequestIndicatorsProps } from "@modules/client-request/interfaces/components-interfaces/RequestIndicatorsProps";

import { useClientRequestStore } from "@modules/client-request/state-store";

import { CardList, IndicatorSection } from "@modules/core/components";

const RequestIndicators = ({
  loading,
}: RequestIndicatorsProps): JSX.Element => {
  const { paginationData } = useClientRequestStore();

  return (
    <IndicatorSection>
      <CardList>
        <CardList.Card
          title="Total Solicitudes"
          value={String(paginationData.totalElements)}
          Icon={GoogleDocs}
          captionText="General"
          variant="neutral"
          loading={loading}
        />
      </CardList>
    </IndicatorSection>
  );
};

export default RequestIndicators;

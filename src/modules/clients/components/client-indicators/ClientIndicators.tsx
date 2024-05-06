import { Group } from "iconoir-react";

import { ClientIndicatorsProps } from "@modules/clients/interfaces/components-interfaces/ClientIndicatorsProps";

import { getCurrentMonthClients } from "@modules/clients/utils/helpers";
import { useClientsStore } from "@modules/clients/state-store";

import { CardList, IndicatorSection } from "@modules/core/components";

const ClientIndicators = ({ loading }: ClientIndicatorsProps): JSX.Element => {
  const { clients, paginationData } = useClientsStore();

  return (
    <IndicatorSection>
      <CardList>
        <CardList.Card
          title="Total clientes"
          value={String(paginationData.totalElements)}
          Icon={Group}
          captionText="General"
          variant="primary"
          loading={loading}
        />
        <CardList.Card
          title="Clientes nuevos"
          value={String(getCurrentMonthClients(clients).length)}
          Icon={Group}
          captionText="Mes Actual"
          variant="light"
          loading={loading}
        />
      </CardList>
    </IndicatorSection>
  );
};

export default ClientIndicators;

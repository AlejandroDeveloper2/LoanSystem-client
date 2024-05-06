import { Group } from "iconoir-react";

import { useClientDetail } from "@modules/clients/hooks";

import { InfoSection, Spinner } from "@modules/core/components";
import { UpdateClientForm } from "@modules/clients/components";

const ClientDetailPage = (): JSX.Element => {
  const { loadingData, clientParam } = useClientDetail();

  return (
    <>
      <h1 className="heading1">
        <Group />
        Actualizar datos del cliente
      </h1>
      <InfoSection
        sectionTitle="Datos del cliente"
        labelId="id del cliente"
        link="/userPanel/clients"
        recordId={clientParam.clientId}
      />
      {loadingData.loading ? (
        <Spinner
          className="spinnerBarPrimary"
          message={loadingData.loadingMessage}
        />
      ) : (
        <UpdateClientForm />
      )}
    </>
  );
};

export default ClientDetailPage;

import { User, Phone, HelpSquare } from "iconoir-react";

import { initialValues } from "@modules/loan-request/constants/referencesInfoInitialValues";
import { ReferencesDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import { useClientRequestStore } from "@modules/client-request/state-store";
import { fillForm } from "@modules/client-request/utils/helpers";

import { InfoCard } from "@modules/core/components";

import styles from "@modules/core/components/form/Form.module.css";

const ReferencesInfoSection = (): JSX.Element => {
  const { clientRequest } = useClientRequestStore();

  const referencesInfo = fillForm<ReferencesDataForm>(
    clientRequest,
    "personalReference",
    initialValues
  );

  return (
    <section className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Referencias personales</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard
            Icon={User}
            label="Nombres del primer familiar"
            value={referencesInfo.firstRelativeNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular del familiar"
            value={referencesInfo.firstRelativePhone}
          />
          <InfoCard
            Icon={User}
            label="Nombres del segundo familiar"
            value={referencesInfo.secondRelativeNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular del familiar"
            value={referencesInfo.secondRelativePhone}
          />
          <InfoCard
            Icon={User}
            label="Primer nombre referencia (Amigo)"
            value={referencesInfo.firstFriendNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular"
            value={referencesInfo.firstFriendPhone}
          />
          <InfoCard
            Icon={User}
            label="Segundo nombre referencia (Amigo)"
            value={referencesInfo.secondFriendNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular"
            value={referencesInfo.secondFriendPhone}
          />
          <InfoCard
            Icon={HelpSquare}
            label="¿Porque medio se enteró de nosotros?"
            value={referencesInfo.interaction}
          />
          <InfoCard
            Icon={User}
            label="Nombre de la persona que lo recomendó"
            value={referencesInfo.referredName}
          />
          <InfoCard
            Icon={Phone}
            label="Celular"
            value={referencesInfo.referredPhone}
          />
        </fieldset>
      </form>
    </section>
  );
};

export default ReferencesInfoSection;

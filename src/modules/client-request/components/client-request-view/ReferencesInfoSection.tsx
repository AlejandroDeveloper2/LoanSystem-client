import { User, Phone, HelpSquare } from "iconoir-react";

import { initialValues } from "@modules/loan-request/constants/referencesInfoInitialValues";
import { ReferencesData } from "@modules/loan-request/interfaces/data-interfaces";
import {
  parseReferenceData,
  parseReferenceDataReverse,
} from "@modules/loan-request/utils/helpers";

import { useClientRequestStore } from "@modules/client-request/state-store";
import { fillForm } from "@modules/client-request/utils/helpers";

import { InfoCard } from "@modules/core/components";

import styles from "@modules/core/components/form/Form.module.css";

const ReferencesInfoSection = (): JSX.Element => {
  const { clientRequest } = useClientRequestStore();

  const referencesInfo = fillForm<ReferencesData>(
    clientRequest,
    "personalReference",
    parseReferenceData(initialValues)
  );

  const parsedReferencesInfo = parseReferenceDataReverse(referencesInfo);

  return (
    <section className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Referencias personales</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard
            Icon={User}
            label="Nombres del primer familiar"
            value={parsedReferencesInfo.firstRelativeNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular del familiar"
            value={parsedReferencesInfo.firstRelativePhone}
          />
          <InfoCard
            Icon={User}
            label="Nombres del segundo familiar"
            value={parsedReferencesInfo.secondRelativeNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular del familiar"
            value={parsedReferencesInfo.secondRelativePhone}
          />
          <InfoCard
            Icon={User}
            label="Primer nombre referencia (Amigo)"
            value={parsedReferencesInfo.firstFriendNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular"
            value={parsedReferencesInfo.firstFriendPhone}
          />
          <InfoCard
            Icon={User}
            label="Segundo nombre referencia (Amigo)"
            value={parsedReferencesInfo.secondFriendNames}
          />
          <InfoCard
            Icon={Phone}
            label="Celular"
            value={parsedReferencesInfo.secondFriendPhone}
          />
          <InfoCard
            Icon={HelpSquare}
            label="¿Porque medio se enteró de nosotros?"
            value={referencesInfo.interaction}
          />
          <InfoCard
            Icon={User}
            label="Nombre de la persona que lo recomendó"
            value={parsedReferencesInfo.referredName}
          />
          <InfoCard
            Icon={Phone}
            label="Celular"
            value={parsedReferencesInfo.referredPhone}
          />
        </fieldset>
      </form>
    </section>
  );
};

export default ReferencesInfoSection;

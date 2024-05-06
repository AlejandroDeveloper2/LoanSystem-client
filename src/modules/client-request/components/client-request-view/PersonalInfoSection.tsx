import {
  AtSign,
  Hashtag,
  Home,
  MapPin,
  MapsArrow,
  PeopleTag,
  Phone,
  Suitcase,
  Triangle,
  User,
} from "iconoir-react";

import { initialValues } from "@modules/loan-request/constants/personalInfoInitialValues";
import { PersonalDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import { useClientRequestStore } from "@modules/client-request/state-store";
import { fillForm } from "@modules/client-request/utils/helpers";

import { InfoCard } from "@modules/core/components";

import styles from "@modules/core/components/form/Form.module.css";

const PersonalInfoSection = (): JSX.Element => {
  const { clientRequest } = useClientRequestStore();

  const personalInfo = fillForm<PersonalDataForm>(
    clientRequest,
    "client",
    initialValues
  );

  return (
    <section className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Información personal</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard
            Icon={AtSign}
            label="Correo Eléctronico"
            value={personalInfo.email}
          />
          <InfoCard
            Icon={User}
            label="Nombre completo"
            value={personalInfo.fullName}
          />
          <InfoCard
            Icon={User}
            label="Tipo de identificación"
            value={personalInfo.typeOfIdentification}
          />
          <InfoCard
            Icon={Hashtag}
            label="Número de identificación"
            value={personalInfo.identification}
          />
          <InfoCard
            Icon={Phone}
            label="Número de teléfono"
            value={personalInfo.phone}
          />
          <InfoCard
            Icon={PeopleTag}
            label="Estado civil"
            value={personalInfo.civilStatus}
          />
          <InfoCard
            Icon={Suitcase}
            label="Profesión u ocupación"
            value={personalInfo.profession}
          />
          <InfoCard
            Icon={MapPin}
            label="Dirección de residencia"
            value={personalInfo.address}
          />
          <InfoCard
            Icon={Home}
            label="Digita el número de la casa"
            value={personalInfo.houseNumber}
          />
          <InfoCard
            Icon={MapsArrow}
            label="Sector"
            value={personalInfo.sector}
          />
          <InfoCard
            Icon={MapsArrow}
            label="Ciudad o provincia"
            value={personalInfo.city}
          />
          <InfoCard
            Icon={Triangle}
            label="Tipo de residencia"
            value={personalInfo.typeOfResidence}
          />
        </fieldset>
      </form>
    </section>
  );
};

export default PersonalInfoSection;

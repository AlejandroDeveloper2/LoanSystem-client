import { useParams } from "react-router-dom";
import { AtSign, Hashtag, Phone, Suitcase, User } from "iconoir-react";

import { useLoanStore } from "@modules/loan/state-store";

import { InfoCard } from "@modules/core/components";

import styles from "@modules/core/components/form/Form.module.css";

const ClientInfoSection = (): JSX.Element => {
  const params = useParams();
  const loanParam = params as { loanId: string };

  const { loans } = useLoanStore();

  const loan = loans.filter((loan) => loan.id === loanParam.loanId)[0];

  return (
    <div className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Datos básicos del cliente</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard Icon={User} label="Nombres" value={loan.client.fullName} />
          <InfoCard
            Icon={Hashtag}
            label="número de documento"
            value={loan.client.identification}
          />
          <InfoCard
            Icon={AtSign}
            label="Correo eléctronico"
            value={loan.client.email}
          />
          <InfoCard Icon={Phone} label="Teléfono" value={loan.client.phone} />
          <InfoCard
            Icon={Suitcase}
            label="Profesión"
            value={loan.client.profession}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default ClientInfoSection;

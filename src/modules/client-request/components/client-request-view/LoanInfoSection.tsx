import { DollarCircle, Triangle, Calendar, Cutlery } from "iconoir-react";

import { initialValues } from "@modules/loan-request/constants/loanInfoInitialValues";
import { LoanDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import { useClientRequestStore } from "@modules/client-request/state-store";
import { fillForm } from "@modules/client-request/utils/helpers";

import { InfoCard } from "@modules/core/components";

import styles from "@modules/core/components/form/Form.module.css";

const LoanInfoSection = (): JSX.Element => {
  const { clientRequest } = useClientRequestStore();

  const loanInfo = fillForm<LoanDataForm>(clientRequest, "loan", initialValues);

  return (
    <section className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Información del préstamo</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard
            Icon={DollarCircle}
            label="Monto solicitado"
            value={loanInfo.amount}
          />
          <InfoCard
            Icon={Triangle}
            label="Modalidad de pago"
            value={loanInfo.paymentCycle}
          />
          <InfoCard Icon={Calendar} label="Plazo" value={loanInfo.deadline} />
          <InfoCard
            Icon={Cutlery}
            label="Préstamo"
            value={loanInfo.description}
          />
        </fieldset>
      </form>
    </section>
  );
};

export default LoanInfoSection;

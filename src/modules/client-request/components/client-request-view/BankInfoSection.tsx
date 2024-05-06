import { PiggyBank, Bank, CreditCard } from "iconoir-react";

import { initialValues } from "@modules/loan-request/constants/bankInfoInitialValues";
import { BankAccountDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import { useClientRequestStore } from "@modules/client-request/state-store";
import { fillForm } from "@modules/client-request/utils/helpers";

import { InfoCard } from "@modules/core/components";

import styles from "@modules/core/components/form/Form.module.css";

const BankInfoSection = (): JSX.Element => {
  const { clientRequest } = useClientRequestStore();

  const bankInfo = fillForm<BankAccountDataForm>(
    clientRequest,
    "bankAccount",
    initialValues
  );

  return (
    <section className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Información de cuenta bancaria</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard
            Icon={PiggyBank}
            label="Tipo de cuenta"
            value={bankInfo.accountType}
          />
          <InfoCard Icon={Bank} label="Banco" value={bankInfo.bank} />
          <InfoCard
            Icon={Bank}
            label="Nombre del banco (Si escogió otro)"
            value={bankInfo.name}
          />
          <InfoCard
            Icon={CreditCard}
            label="Número de cuenta"
            value={bankInfo.accountNumber}
          />
        </fieldset>
      </form>
    </section>
  );
};

export default BankInfoSection;

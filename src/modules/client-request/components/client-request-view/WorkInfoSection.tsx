import {
  Building,
  Phone,
  MapPin,
  Clock,
  Suitcase,
  User,
  Cash,
  Coins,
  AlignLeft,
} from "iconoir-react";

import { initialValues } from "@modules/loan-request/constants/workInfoInitialValues";
import { WorkDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import { useClientRequestStore } from "@modules/client-request/state-store";
import { fillForm } from "@modules/client-request/utils/helpers";
import { formatMoney } from "@modules/core/utils/helpers";

import { InfoCard } from "@modules/core/components";

import styles from "@modules/core/components/form/Form.module.css";

const WorkInfoSection = (): JSX.Element => {
  const { clientRequest } = useClientRequestStore();

  const workInfo = fillForm<WorkDataForm>(
    clientRequest,
    "workingInformation",
    initialValues
  );

  return (
    <section className="formContainer">
      <form id="read-only-personal-form" className={styles.form}>
        <h2 className="heading2"> Información laboral</h2>
        <fieldset className={styles.fieldset}>
          <InfoCard
            Icon={Building}
            label="Empresa donde labora"
            value={workInfo.companyName}
          />
          <InfoCard
            Icon={Phone}
            label="Teléfono de la empresa"
            value={workInfo.phone}
          />
          <InfoCard
            Icon={MapPin}
            label="Dirección de la empresa"
            value={workInfo.address}
          />
          <InfoCard
            Icon={Clock}
            label="Tiempo trabajando en la empresa (En meses)"
            value={workInfo.timeWorking}
          />
          <InfoCard
            Icon={Suitcase}
            label="Posición que ocupa"
            value={workInfo.position}
          />
          <InfoCard
            Icon={User}
            label="Nombre de su jefe inmediato"
            value={workInfo.bossName}
          />
          <InfoCard
            Icon={Phone}
            label="Teléfono jefe inmediato"
            value={workInfo.bossPhone}
          />
          <InfoCard
            Icon={Cash}
            label="Salarío mensual"
            value={formatMoney(workInfo.salary)}
          />
          <InfoCard
            Icon={Coins}
            label="El Pago De Su Nomina Es:"
            value={workInfo.paymentOfPayroll}
          />
          <InfoCard
            Icon={Cash}
            label="Valor otros ingresos"
            value={formatMoney(workInfo.otherIncome)}
          />
          <InfoCard
            Icon={AlignLeft}
            label="Fuente otros ingresos"
            value={workInfo.description}
          />
        </fieldset>
      </form>
    </section>
  );
};

export default WorkInfoSection;

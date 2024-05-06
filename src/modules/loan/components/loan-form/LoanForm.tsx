import {
  Cash,
  FloppyDisk,
  HandCash,
  Hashtag,
  RefreshDouble,
  User,
} from "iconoir-react";

import { LoanFormProps } from "@modules/loan/interfaces/component-interfaces/LoanFormProps";
import { LoanDataForm } from "@modules/loan/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/loan/constants/loanInitialValues";

import { useForm } from "@modules/core/hooks";
import { useLoanStore } from "@modules/loan/state-store";
import { validationSchema } from "./ValidationSchema";

import { Form, Spinner } from "@modules/core/components";
import { useLoanFormLoad } from "@modules/loan/hooks";

const LoanForm = ({ toggleModal }: LoanFormProps): JSX.Element => {
  function action() {
    createLoan(formData, loadingData.toggleLoadingSaveLoan).then(() => {
      toggleModal();
    });
  }
  const { clients, loadingData } = useLoanFormLoad();
  const { createLoan } = useLoanStore();

  const { formData, formRef, errors, handleChange, handleSubmit } =
    useForm<LoanDataForm>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <Form
      formTitle="Datos básicos del préstamo"
      Icon={HandCash}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      {loadingData.loading ? (
        <Spinner
          className="spinnerBarPrimary"
          message={loadingData.loadingMessage}
        />
      ) : (
        <>
          <Form.FieldSet id="loan-input-set" setStyle="gridForm">
            <Form.Select
              id="client"
              name="client"
              label="Seleccionar cliente *"
              value={formData.client}
              errorMessage={errors["client"].message}
              options={clients.map((client) => ({
                label: client.fullName,
                value: client.id,
              }))}
              Icon={User}
              onChange={handleChange}
            />
            <Form.Input
              id="amount"
              name="amount"
              label="Monto solicitado *"
              type="number"
              placeholder="Digita el monto del préstamo"
              value={formData.amount}
              errorMessage={errors["amount"].message}
              Icon={Cash}
              onChange={handleChange}
            />
            <Form.Select
              id="paymentCycle"
              name="paymentCycle"
              label="Ciclo de pago *"
              value={formData.paymentCycle}
              errorMessage={errors["paymentCycle"].message}
              options={[
                { label: "Mensual", value: "Mensual" },
                { label: "Quincenal", value: "Quincenal" },
                { label: "Semanal", value: "Semanal" },
              ]}
              Icon={RefreshDouble}
              onChange={handleChange}
            />
            <Form.Input
              id="deadline"
              name="deadline"
              label="Tiempo del préstamo en meses *"
              type="number"
              placeholder="Digita el tiempo en meses"
              value={formData.deadline}
              errorMessage={errors["deadline"].message}
              Icon={Hashtag}
              onChange={handleChange}
            />
          </Form.FieldSet>
          <Form.IconButton
            id="button-save-loan"
            type="submit"
            title="Crear préstamo"
            Icon={FloppyDisk}
            label="Crear préstamo"
            variant="primary"
            loading={loadingData.loadingSaveLoan}
            onClick={() => {}}
          />
        </>
      )}
    </Form>
  );
};

export default LoanForm;

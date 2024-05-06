import { useNavigate } from "react-router-dom";
import {
  HandCash,
  Cash,
  RefreshDouble,
  Percentage,
  Clock,
  Calendar,
  Hashtag,
  Settings,
  Check,
} from "iconoir-react";

import { ApproveLoanDataForm } from "@modules/loan/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/loan/constants/approveInitialValues";

import { useForm } from "@modules/core/hooks";
import { useApproveLoanFormLoad } from "@modules/loan/hooks";
import { useLoanStore } from "@modules/loan/state-store";
import { calculateNumberOfQuotas } from "@modules/loan/utils/helpers";
import { validationSchema } from "./ValidationSchema";

import { Form, IconButton, Loader, Spinner } from "@modules/core/components";
import { PaymentScheduleTable } from "..";

const ApproveLoanForm = (): JSX.Element => {
  const navigate = useNavigate();
  const { loan, generatePaymentSchedule, approveLoan } = useLoanStore();

  const action = () => {
    const newFormData = {
      ...formData,
      numberOfQuotas: calculateNumberOfQuotas(
        formData.deadline,
        formData.paymentCycle
      ),
    };
    generatePaymentSchedule(
      newFormData,
      loadingData.toggleLoadingPaymentSchedule
    );
  };

  const {
    formData,
    errors,
    formRef,
    handleChange,
    handleSubmit,
    updateFormInitialValues,
  } = useForm<ApproveLoanDataForm>(
    initialValues,
    initialErrors,
    "edit",
    validationSchema,
    action
  );

  const { loadingData, loanParam } = useApproveLoanFormLoad(
    formData,
    updateFormInitialValues
  );

  return loadingData.loadingLoan ? (
    <Spinner
      className="spinnerBarPrimary"
      message={loadingData.loadingMessageLoan}
    />
  ) : (
    <>
      <div className="formContainer">
        <Form
          formTitle="Datos Básicos del Préstamo"
          Icon={HandCash}
          formRef={formRef}
          handleSubmit={handleSubmit}
        >
          <Form.FieldSet id="approve-input-set" setStyle="gridForm">
            <Form.Input
              id="amount"
              name="amount"
              label="Monto solicitado *"
              type="number"
              placeholder="Digita el monto solicitado"
              value={formData.amount}
              errorMessage={errors["amount"].message}
              Icon={Cash}
              disabled={loan.loanState !== "Pendiente"}
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
              disabled={loan.loanState !== "Pendiente"}
              onChange={handleChange}
            />
            <Form.Input
              id="interest"
              name="interest"
              label="Tasa de interes *"
              type="number"
              placeholder="Digita la tasa de interés"
              value={formData.interest}
              errorMessage={errors["interest"].message}
              Icon={Percentage}
              disabled={loan.loanState !== "Pendiente"}
              onChange={handleChange}
            />
            <Form.Input
              id="deadline"
              name="deadline"
              label="Tiempo del préstamo en meses *"
              type="number"
              placeholder="Digita el tiempo del préstamo en meses"
              value={formData.deadline}
              errorMessage={errors["deadline"].message}
              Icon={Clock}
              disabled={loan.loanState !== "Pendiente"}
              onChange={handleChange}
            />
            <Form.Input
              id="firstPaymentDate"
              name="firstPaymentDate"
              label="Fecha primer pago *"
              type="date"
              placeholder="Seleccione fecha de primer pago"
              value={formData.firstPaymentDate ? formData.firstPaymentDate : ""}
              errorMessage={errors["firstPaymentDate"].message}
              Icon={Calendar}
              disabled={loan.loanState !== "Pendiente"}
              onChange={handleChange}
            />
            <Form.Input
              id="numberOfQuotas"
              name="numberOfQuotas"
              label="Número de cuotas *"
              type="number"
              placeholder="Digita la cantidad de cuotas"
              value={formData.numberOfQuotas}
              errorMessage={errors["numberOfQuotas"].message}
              Icon={Hashtag}
              disabled={true}
              onChange={handleChange}
            />
          </Form.FieldSet>
          {loan.loanState !== "Pendiente" ? null : (
            <Form.IconButton
              id="button-generate-schedule"
              type="submit"
              title="Generar calendario de pagos"
              Icon={Settings}
              label="Generar calendario de pago"
              variant="primary"
              loading={loadingData.loadingPaymentSchedule}
              onClick={() => {}}
            />
          )}
        </Form>
      </div>
      {loadingData.loadingPaymentSchedule ? (
        <Loader message={loadingData.loadingPaymentScheduleMessage} />
      ) : loan.paymentSchedules.length > 0 ? (
        <>
          <h1 className="heading2">Calendario de pagos</h1>
          <PaymentScheduleTable />
          {loan.loanState !== "Pendiente" ? null : (
            <IconButton
              Icon={Check}
              label="Aprobar préstamo"
              id="btn-approve-loan"
              type="button"
              title="Aprobar préstamo"
              variant="primary"
              loading={loadingData.loadingApproveLoan}
              onClick={() => {
                approveLoan(
                  loanParam.loanId,
                  formData,
                  loadingData.toggleLoadingApproveLoan
                );
                navigate("/userPanel/loans");
              }}
            />
          )}
        </>
      ) : null}
    </>
  );
};

export default ApproveLoanForm;

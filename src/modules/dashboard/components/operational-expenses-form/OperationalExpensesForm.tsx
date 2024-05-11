import { Calculator, Calendar, HandCash } from "iconoir-react";

import { OperationalExpensesFormData } from "@modules/dashboard/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/dashboard/constants/operationalInitialValues";

import { useForm, useLoading } from "@modules/core/hooks";
import { useIndicatorsStore } from "@modules/dashboard/state-store";
import { validationSchema } from "./ValidationSchema";
import { formatMoney } from "@modules/core/utils/helpers";

import { CardList, Form } from "@modules/core/components";

const OperationalExpensesForm = (): JSX.Element => {
  const { loading, toggleLoading } = useLoading();

  const action = () => {
    getOperationalExpenses(formData, toggleLoading);
  };

  const { operationalExpenses, getOperationalExpenses } = useIndicatorsStore();

  const { formData, formRef, errors, handleChange, handleSubmit } =
    useForm<OperationalExpensesFormData>(
      initialValues,
      initialErrors,
      "add",
      validationSchema,
      action
    );

  return (
    <Form
      formTitle="Calcular gastos operativos"
      Icon={HandCash}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="operational-expenses-input-set" setStyle="flexForm">
        <Form.Input
          id="startDate"
          name="startDate"
          label="Fecha inicial"
          type="date"
          placeholder="Ingresa fecha inicial"
          value={formData.startDate}
          errorMessage={errors["startDate"].message}
          Icon={Calendar}
          onChange={handleChange}
        />
        <Form.Input
          id="endDate"
          name="endDate"
          label="Fecha final"
          type="date"
          placeholder="ingresa fecha final"
          value={formData.endDate}
          errorMessage={errors["endDate"].message}
          Icon={Calendar}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-calculate"
        type="submit"
        title="Filtrar gastos operativos"
        Icon={Calculator}
        label="Filtrar"
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
      <CardList>
        <CardList.Card
          title="Total capital invertido"
          value={formatMoney(operationalExpenses)}
          Icon={HandCash}
          captionText="Calculado"
          variant="warning"
          loading={loading}
        />
      </CardList>
    </Form>
  );
};

export default OperationalExpensesForm;

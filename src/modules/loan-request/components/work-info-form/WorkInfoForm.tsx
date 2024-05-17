/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  Suitcase,
  Building,
  Phone,
  MapPin,
  Clock,
  User,
  Cash,
  AlignLeft,
  FloppyDisk,
} from "iconoir-react";

import { WorkDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/loan-request/constants/workInfoInitialValues";

import { useFormStepper } from "@modules/loan-request/hooks";
import { useForm, useRadioButton } from "@modules/core/hooks";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const WorkInfoForm = (): JSX.Element => {
  function action() {
    saveStepFormData(formData);
  }
  const { fillFormStepData, saveStepFormData } = useFormStepper<WorkDataForm>(
    "/loanRequest/loanInfo",
    "workingInformation"
  );
  const {
    formData,
    formRef,
    errors,
    updateFormData,
    updateFormInitialValues,
    handleChange,
    handleSubmit,
  } = useForm<WorkDataForm>(
    initialValues,
    initialErrors,
    "edit",
    validationSchema,
    action
  );
  const { radioButtonData, handleRadioChange } = useRadioButton<{
    option1: string;
    option2: string;
    option3: string;
  }>(
    { option1: "Mensual", option2: "Quincenal", option3: "Semanal" },
    fillFormStepData("workingInformation", initialValues).paymentOfPayroll,
    "paymentOfPayroll",
    updateFormData
  );

  useEffect(() => {
    updateFormInitialValues(
      fillFormStepData("workingInformation", initialValues)
    );
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Form
      formTitle="Información laboral"
      Icon={Suitcase}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="work-info-input-set" setStyle="gridForm">
        <Form.Input
          id="companyName"
          name="companyName"
          label="Empresa donde labora *"
          type="text"
          placeholder="Digita el nombre de la empresa"
          value={formData.companyName}
          errorMessage={errors["companyName"].message}
          Icon={Building}
          onChange={handleChange}
        />
        <Form.Input
          id="phone"
          name="phone"
          label="Teléfono de la empresa *"
          type="phone"
          placeholder="Digita el número de telefono de la empresa"
          value={formData.phone}
          errorMessage={errors["phone"].message}
          Icon={Phone}
          onChange={handleChange}
        />
        <Form.Input
          id="address"
          name="address"
          label="Dirección de la empresa *"
          type="text"
          placeholder="Digita la dirección de la empresa"
          value={formData.address}
          errorMessage={errors["address"].message}
          Icon={MapPin}
          onChange={handleChange}
        />
        <Form.Input
          id="timeWorking"
          name="timeWorking"
          label="Tiempo trabajando en la empresa (En meses) *"
          type="number"
          placeholder="Digita el tiempo trabajando en la empresa"
          value={formData.timeWorking}
          errorMessage={errors["timeWorking"].message}
          Icon={Clock}
          onChange={handleChange}
        />
        <Form.Input
          id="position"
          name="position"
          label="Posición que ocupa"
          type="text"
          placeholder="Digita tu cargo en la empresa"
          value={formData.position}
          errorMessage={errors["position"].message}
          Icon={Suitcase}
          onChange={handleChange}
        />

        <Form.Input
          id="bossName"
          name="bossName"
          label="Nombre de su jefe inmediato *"
          type="text"
          placeholder="Digita el nombre de su jefe "
          value={formData.bossName}
          errorMessage={errors["bossName"].message}
          Icon={User}
          onChange={handleChange}
        />
        <Form.Input
          id="bossPhone"
          name="bossPhone"
          label="Teléfono jefe inmediato *"
          type="phone"
          placeholder="Digita el número de teléfono de su jefe"
          value={formData.bossPhone}
          errorMessage={errors["bossPhone"].message}
          Icon={Phone}
          onChange={handleChange}
        />
        <Form.Input
          id="salary"
          name="salary"
          label="Salarío mensual *"
          type="number"
          placeholder="Digita tu salarío mensual "
          value={formData.salary}
          errorMessage={errors["salary"].message}
          Icon={Cash}
          onChange={handleChange}
        />
        <Form.RadioButtonList
          id="paymentOfPayroll"
          label="Recibe su salario de forma: *"
          errorMessage={errors["paymentOfPayroll"].message}
          radioButtons={[
            {
              id: "option-1",
              name: "paymentOfPayroll",
              value: radioButtonData.option1,
              label: "Mensual",
              checked:
                radioButtonData.selectedValue === radioButtonData.option1,
              onChange: handleRadioChange,
            },
            {
              id: "option-2",
              name: "paymentOfPayroll",
              value: radioButtonData.option2,
              label: "Quincenal",
              checked:
                radioButtonData.selectedValue === radioButtonData.option2,
              onChange: handleRadioChange,
            },
            {
              id: "option-3",
              name: "paymentOfPayroll",
              value: radioButtonData.option3,
              label: "Semanal",
              checked:
                radioButtonData.selectedValue === radioButtonData.option3,
              onChange: handleRadioChange,
            },
          ]}
        />
        <Form.Input
          id="otherIncome"
          name="otherIncome"
          label="Valor otros ingresos (Ópcional)"
          type="number"
          placeholder="Digita el valor de otros ingresos"
          value={formData.otherIncome}
          errorMessage={errors["otherIncome"].message}
          Icon={Cash}
          onChange={handleChange}
        />
        <Form.TextArea
          id="description"
          name="description"
          label="Fuente otros ingresos (Ópcional)"
          placeholder="Describe la fuente de otros ingresos"
          value={formData.description}
          errorMessage={errors["description"].message}
          Icon={AlignLeft}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-save-continue"
        type="submit"
        title="Guardar y continuar"
        Icon={FloppyDisk}
        label="Guardar y continuar"
        variant="primary"
        loading={false}
        onClick={() => {}}
      />
    </Form>
  );
};

export default WorkInfoForm;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Community, User, Phone, DoubleCheck } from "iconoir-react";

import {
  ReferencesData,
  ReferencesDataForm,
} from "@modules/loan-request/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/loan-request/constants/referencesInfoInitialValues";

import { useForm, useLoading, useRadioButton } from "@modules/core/hooks";
import { useFormStepper } from "@modules/loan-request/hooks";
import {
  parseReferenceData,
  parseReferenceDataReverse,
} from "@modules/loan-request/utils/helpers";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const ReferencesInfoForm = (): JSX.Element => {
  const { loading, toggleLoading } = useLoading();

  function action() {
    const parsedData: ReferencesData = parseReferenceData(formData);
    saveStepFormData(parsedData);
  }

  const { currentStepData, saveStepFormData, fillFormStepData } =
    useFormStepper<ReferencesData>(
      "/loanRequest/personalReferences",
      "personalReference",
      toggleLoading
    );

  const {
    formData,
    errors,
    formRef,
    updateFormData,
    updateFormInitialValues,
    handleChange,
    handleSubmit,
  } = useForm<ReferencesDataForm>(
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
    {
      option1: "Referencia de un conocido",
      option2: "Redes sociales",
      option3: "Publicidad de sticker",
    },
    fillFormStepData("personalReference", parseReferenceData(initialValues))
      .interaction,
    "interaction",
    updateFormData
  );

  useEffect(() => {
    const parsedInitialValues: ReferencesData = fillFormStepData(
      "personalReference",
      parseReferenceData(initialValues)
    );
    updateFormInitialValues(parseReferenceDataReverse(parsedInitialValues));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Form
      formTitle="Referencias personales"
      Icon={Community}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="references-info-input-set" setStyle="gridForm">
        <Form.Input
          id="firstRelativeNames"
          name="firstRelativeNames"
          label="Nombres del primer familiar *"
          type="text"
          placeholder="Digita el nombre de tu primer familiar"
          value={formData.firstRelativeNames}
          errorMessage={errors.firstRelativeNames.message}
          Icon={User}
          onChange={handleChange}
        />
        <Form.Input
          id="firstRelativePhone"
          name="firstRelativePhone"
          label="Celular del familiar *"
          type="phone"
          placeholder="Digita el teléfono del familiar"
          value={formData.firstRelativePhone}
          errorMessage={errors.firstRelativePhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
        <Form.Input
          id="secondRelativeNames"
          name="secondRelativeNames"
          label="Nombres del segundo familiar *"
          type="text"
          placeholder="Digita el nombre de tu segundo familiar"
          value={formData.secondRelativeNames}
          errorMessage={errors.secondRelativeNames.message}
          Icon={User}
          onChange={handleChange}
        />
        <Form.Input
          id="secondRelativePhone"
          name="secondRelativePhone"
          label="Celular del familiar *"
          type="phone"
          placeholder="Digita el teléfono del familiar"
          value={formData.secondRelativePhone}
          errorMessage={errors.secondRelativePhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
        <Form.Input
          id="firstFriendNames"
          name="firstFriendNames"
          label="Primer nombre referencia (Amigo)*"
          type="text"
          placeholder="Digita el nombre de tu primer amigo"
          value={formData.firstFriendNames}
          errorMessage={errors.firstFriendNames.message}
          Icon={User}
          onChange={handleChange}
        />
        <Form.Input
          id="firstFriendPhone"
          name="firstFriendPhone"
          label="Celular *"
          type="phone"
          placeholder="Digita el teléfono de la referencia"
          value={formData.firstFriendPhone}
          errorMessage={errors.firstFriendPhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
        <Form.Input
          id="secondFriendNames"
          name="secondFriendNames"
          label="Segundo nombre referencia (Amigo)*"
          type="text"
          placeholder="Digita el nombre de tu segundo amigo"
          value={formData.secondFriendNames}
          errorMessage={errors.secondFriendNames.message}
          Icon={User}
          onChange={handleChange}
        />
        <Form.Input
          id="secondFriendPhone"
          name="secondFriendPhone"
          label="Celular *"
          type="phone"
          placeholder="Digita el teléfono de la referencia"
          value={formData.secondFriendPhone}
          errorMessage={errors.secondFriendPhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
        <Form.RadioButtonList
          id="interaction"
          label="¿Porque medio se enteró de nosotros? (Ópcional)"
          errorMessage={errors["interaction"].message}
          radioButtons={[
            {
              id: "option-1",
              name: "interaction",
              value: radioButtonData.option1,
              label: "Referencia de un conocido",
              checked:
                radioButtonData.selectedValue === radioButtonData.option1,
              onChange: handleRadioChange,
            },
            {
              id: "option-2",
              name: "interaction",
              value: radioButtonData.option2,
              label: "Redes sociales",
              checked:
                radioButtonData.selectedValue === radioButtonData.option2,
              onChange: handleRadioChange,
            },
            {
              id: "option-3",
              name: "interaction",
              value: radioButtonData.option3,
              label: "Publicidad de sticker",
              checked:
                radioButtonData.selectedValue === radioButtonData.option3,
              onChange: handleRadioChange,
            },
          ]}
        />
        <Form.Input
          id="referredName"
          name="referredName"
          label="Nombre de la persona que lo recomendó (Ópcional)"
          type="text"
          placeholder="Digita el nombre de la persona"
          value={formData.referredName}
          errorMessage={errors.referredName.message}
          Icon={User}
          onChange={handleChange}
        />
        <Form.Input
          id="referredPhone"
          name="referredPhone"
          label="Celular (Ópcional)"
          type="phone"
          placeholder="Digita el teléfono de la persona"
          value={formData.referredPhone}
          errorMessage={errors.referredPhone.message}
          Icon={Phone}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-save-continue"
        type="submit"
        title="Guardar y finalizar"
        Icon={DoubleCheck}
        label="Guardar y finalizar"
        variant="primary"
        loading={loading}
        disabled={currentStepData.completedForms < 4}
        onClick={() => {}}
      />
    </Form>
  );
};

export default ReferencesInfoForm;

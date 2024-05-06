/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import {
  User,
  AtSign,
  Hashtag,
  Phone,
  PeopleTag,
  Suitcase,
  MapPin,
  Home,
  MapsArrow,
  FloppyDisk,
} from "iconoir-react";

import { PersonalDataForm } from "@modules/loan-request/interfaces/data-interfaces";

import {
  initialErrors,
  initialValues,
} from "@modules/loan-request/constants/personalInfoInitialValues";

import { useFormStepper } from "@modules/loan-request/hooks";
import { useForm, useRadioButton } from "@modules/core/hooks";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const PersonalInfoForm = (): JSX.Element => {
  function action() {
    saveStepFormData(formData);
  }
  const { fillFormStepData, saveStepFormData } =
    useFormStepper<PersonalDataForm>("/loanRequest/workData", "client");
  const {
    formData,
    formRef,
    errors,
    updateFormData,
    updateFormInitialValues,
    handleChange,
    handleSubmit,
  } = useForm<PersonalDataForm>(
    initialValues,
    initialErrors,
    "edit",
    validationSchema,
    action
  );
  const { radioButtonData, handleRadioChange } = useRadioButton<{
    option1: string;
    option2: string;
  }>(
    { option1: "Propia", option2: "Alquilada" },
    fillFormStepData("client", initialValues).typeOfResidence,
    "typeOfResidence",
    updateFormData
  );

  useEffect(() => {
    updateFormInitialValues(fillFormStepData("client", initialValues));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <Form
      formTitle="Datos Personales"
      Icon={User}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="personal-data-input-set" setStyle="gridForm">
        <Form.Input
          id="email"
          name="email"
          label="Correo Electronico *"
          type="text"
          placeholder="Digita tu correo electrónico"
          value={formData.email}
          errorMessage={errors["email"].message}
          Icon={AtSign}
          onChange={handleChange}
        />
        <Form.Input
          id="fullName"
          name="fullName"
          label="Nombre completo *"
          type="text"
          placeholder="Digita tu nombre completo"
          value={formData.fullName}
          errorMessage={errors["fullName"].message}
          Icon={User}
          onChange={handleChange}
        />
        <Form.Select
          id="typeOfIdentification"
          name="typeOfIdentification"
          label="Tipo de identificación *"
          value={formData.typeOfIdentification}
          errorMessage={errors["typeOfIdentification"].message}
          options={[
            { label: "Cédula", value: "Cedula" },
            { label: "Cédula extrangera", value: "CedulaExtrangera" },
          ]}
          Icon={User}
          onChange={handleChange}
        />
        <Form.Input
          id="identification"
          name="identification"
          label="Número de identificación *"
          type="text"
          placeholder="Digita tu identificación"
          value={formData.identification}
          errorMessage={errors["identification"].message}
          Icon={Hashtag}
          onChange={handleChange}
        />
        <Form.Input
          id="phone"
          name="phone"
          label="Número de teléfono"
          type="phone"
          placeholder="Digita tu número de telefono"
          value={formData.phone}
          errorMessage={errors["phone"].message}
          Icon={Phone}
          onChange={handleChange}
        />
        <Form.Select
          id="civilStatus"
          name="civilStatus"
          label="Estado civil *"
          value={formData.civilStatus}
          errorMessage={errors["civilStatus"].message}
          options={[
            { label: "Casado", value: "Casado" },
            { label: "Soltero", value: "Soltero" },
            { label: "Viudo", value: "Viudo" },
          ]}
          Icon={PeopleTag}
          onChange={handleChange}
        />
        <Form.Input
          id="profession"
          name="profession"
          label="Profesión u ocupación *"
          type="text"
          placeholder="Digita tu ocupación o profesión "
          value={formData.profession}
          errorMessage={errors["profession"].message}
          Icon={Suitcase}
          onChange={handleChange}
        />
        <Form.Input
          id="address"
          name="address"
          label="Dirección de residencia *"
          type="text"
          placeholder="Digita la dirección de recidencia "
          value={formData.address}
          errorMessage={errors["address"].message}
          Icon={MapPin}
          onChange={handleChange}
        />
        <Form.Input
          id="houseNumber"
          name="houseNumber"
          label="Número de casa *"
          type="text"
          placeholder="Digita el número de la casa "
          value={formData.houseNumber}
          errorMessage={errors["houseNumber"].message}
          Icon={Home}
          onChange={handleChange}
        />
        <Form.Input
          id="sector"
          name="sector"
          label="Sector *"
          type="text"
          placeholder="Digita el sector de tu residencia "
          value={formData.sector}
          errorMessage={errors["sector"].message}
          Icon={MapsArrow}
          onChange={handleChange}
        />
        {/* Campo nuevo ciudad o provinsea */}
        <Form.Input
          id="city"
          name="city"
          label="Ciudad o provincia *"
          type="text"
          placeholder="Digita tu ciudad o provincia "
          value={formData.city}
          errorMessage={errors["city"].message}
          Icon={MapsArrow}
          onChange={handleChange}
        />
        <Form.RadioButtonList
          id="typeOfResidence"
          label="Tipo de residencia *"
          errorMessage={errors["typeOfResidence"].message}
          radioButtons={[
            {
              id: "option-1",
              name: "typeOfResidence",
              value: radioButtonData.option1,
              label: "Propia",
              checked:
                radioButtonData.selectedValue === radioButtonData.option1,
              onChange: handleRadioChange,
            },
            {
              id: "option-2",
              name: "typeOfResidence",
              value: radioButtonData.option2,
              label: "Alquilada",
              checked:
                radioButtonData.selectedValue === radioButtonData.option2,
              onChange: handleRadioChange,
            },
          ]}
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

export default PersonalInfoForm;

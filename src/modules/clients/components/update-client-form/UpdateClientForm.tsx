/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  Edit,
  Clock,
  Building,
  Cash,
  AlignLeft,
  CreditCard,
  Bank,
} from "iconoir-react";

import { UpdateClientDataForm } from "@modules/clients/interfaces/data-interfaces";

import {
  getInitialValues,
  initialErrors,
} from "@modules/clients/constants/updateClientInitialValues";

import { useForm, useLoading, useRadioButton } from "@modules/core/hooks";
import { useClientsStore } from "@modules/clients/state-store";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const UpdateClientForm = (): JSX.Element => {
  const params = useParams();
  const clientParam = params as { clientId: string };

  const { loading, toggleLoading } = useLoading();

  function action() {
    updateClient(clientParam.clientId, formData, toggleLoading);
  }

  const { client, updateClient } = useClientsStore();

  const {
    formData,
    formRef,
    errors,
    updateFormInitialValues,
    updateFormData,
    handleChange,
    handleSubmit,
  } = useForm<UpdateClientDataForm>(
    getInitialValues(client),
    initialErrors,
    "edit",
    validationSchema,
    action
  );

  useEffect(() => {
    if (client) updateFormInitialValues(getInitialValues(client));
  }, [client]);

  const { radioButtonData, handleRadioChange } = useRadioButton<{
    option1: string;
    option2: string;
  }>(
    { option1: "Propia", option2: "Alquilada" },
    formData.typeOfResidence,
    "typeOfResidence",
    updateFormData
  );

  const {
    radioButtonData: paymentOfPayroll,
    handleRadioChange: paymentOfPayrollChange,
  } = useRadioButton<{
    option1: string;
    option2: string;
    option3: string;
  }>(
    { option1: "Mensual", option2: "Quincenal", option3: "Semanal" },
    formData.paymentOfPayroll,
    "paymentOfPayroll",
    updateFormData
  );

  const {
    radioButtonData: accountType,
    handleRadioChange: handleAccountTypeChange,
  } = useRadioButton<{
    accountType1: string;
    accountType2: string;
  }>(
    { accountType1: "Ahorro", accountType2: "Corriente" },
    formData.accountType,
    "accountType",
    updateFormData
  );

  const { radioButtonData: bank, handleRadioChange: handleBankChange } =
    useRadioButton<{
      bank1: string;
      bank2: string;
      bank3: string;
      bank4: string;
    }>(
      {
        bank1: "Popular",
        bank2: "Banreservas",
        bank3: "BHD",
        bank4: "Otro",
      },
      formData.bank,
      "bank",
      updateFormData
    );
  return (
    <div className="formContainer">
      <Form
        formTitle="Información del cliente"
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
              { label: "Cédula extrangera", value: "CedulaExtranjera" },
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
                  formData.typeOfResidence === radioButtonData.selectedValue,
                onChange: handleRadioChange,
              },
              {
                id: "option-2",
                name: "typeOfResidence",
                value: radioButtonData.option2,
                label: "Alquilada",
                checked:
                  formData.typeOfResidence === radioButtonData.selectedValue,
                onChange: handleRadioChange,
              },
            ]}
          />
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
            id="companyPhone"
            name="companyPhone"
            label="Teléfono de la empresa *"
            type="phone"
            placeholder="Digita el número de telefono de la empresa"
            value={formData.companyPhone}
            errorMessage={errors["companyPhone"].message}
            Icon={Phone}
            onChange={handleChange}
          />
          <Form.Input
            id="companyAddress"
            name="companyAddress"
            label="Dirección de la empresa *"
            type="text"
            placeholder="Digita la dirección de la empresa"
            value={formData.companyAddress}
            errorMessage={errors["companyAddress"].message}
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
            label="Nómina *"
            errorMessage={errors["paymentOfPayroll"].message}
            radioButtons={[
              {
                id: "paymentOfPayroll-1",
                name: "paymentOfPayroll",
                value: paymentOfPayroll.option1,
                label: "Mensual",
                checked: formData.paymentOfPayroll === paymentOfPayroll.option1,
                onChange: paymentOfPayrollChange,
              },
              {
                id: "paymentOfPayroll-2",
                name: "paymentOfPayroll",
                value: paymentOfPayroll.option2,
                label: "Quincenal",
                checked: formData.paymentOfPayroll === paymentOfPayroll.option2,
                onChange: paymentOfPayrollChange,
              },
              {
                id: "paymentOfPayroll-3",
                name: "paymentOfPayroll",
                value: paymentOfPayroll.option3,
                label: "Semanal",
                checked: formData.paymentOfPayroll === paymentOfPayroll.option3,
                onChange: paymentOfPayrollChange,
              },
            ]}
          />
          <Form.Input
            id="otherIncome"
            name="otherIncome"
            label="Valor otros ingresos *"
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
            label="Fuente otros ingresos *"
            placeholder="Describe la fuente de otros ingresos"
            value={formData.description}
            errorMessage={errors["description"].message}
            Icon={AlignLeft}
            onChange={handleChange}
          />
          <Form.RadioButtonList
            id="accountType"
            label="Tipo de cuenta *"
            errorMessage={errors["accountType"].message}
            radioButtons={[
              {
                id: "accountType1",
                name: "accountType",
                value: accountType.accountType1,
                label: "Ahorros / Nómina",
                checked: formData.accountType === accountType.selectedValue,
                onChange: handleAccountTypeChange,
              },
              {
                id: "accountType2",
                name: "accountType",
                value: accountType.accountType2,
                label: "Corriente",
                checked: formData.accountType === accountType.selectedValue,
                onChange: handleAccountTypeChange,
              },
            ]}
          />
          <Form.RadioButtonList
            id="bank"
            label="Banco *"
            errorMessage={errors["bank"].message}
            radioButtons={[
              {
                id: "bank1",
                name: "bank",
                value: bank.bank1,
                label: "Popular",
                checked: formData.bank === bank.selectedValue,
                onChange: handleBankChange,
              },
              {
                id: "bank2",
                name: "bank",
                value: bank.bank2,
                label: "Banreservas",
                checked: formData.bank === bank.selectedValue,
                onChange: handleBankChange,
              },
              {
                id: "bank3",
                name: "bank",
                value: bank.bank3,
                label: "BHD",
                checked: formData.bank === bank.selectedValue,
                onChange: handleBankChange,
              },
              {
                id: "bank4",
                name: "bank",
                value: bank.bank4,
                label: "Otro",
                checked: formData.bank === bank.selectedValue,
                onChange: handleBankChange,
              },
            ]}
          />
          <Form.Input
            id="name"
            name="name"
            label="Nombre del banco (Si escogió otro)"
            type="text"
            placeholder="Digita el nombre del banco"
            value={formData.name}
            errorMessage={errors.name.message}
            Icon={Bank}
            onChange={handleChange}
          />
          <Form.TextArea
            id="accountNumber"
            name="accountNumber"
            label="Número de cuenta *"
            placeholder="Describe los datos de tu cuenta"
            value={formData.accountNumber}
            errorMessage={errors["accountNumber"].message}
            userHint="(Esta cuenta podrá ser usada para depositar el monto de su préstamo solicitado.)"
            Icon={CreditCard}
            onChange={handleChange}
          />
        </Form.FieldSet>
        <Form.IconButton
          id="button-update-personal-info"
          type="submit"
          title="Actualizar información personal"
          Icon={Edit}
          label="Actualizar información"
          variant="warning"
          loading={loading}
          onClick={() => {}}
        />
      </Form>
    </div>
  );
};

export default UpdateClientForm;

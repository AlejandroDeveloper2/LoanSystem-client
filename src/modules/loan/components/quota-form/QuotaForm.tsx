import { HandCash, Cash } from "iconoir-react";

import { QuotaFormProps } from "@modules/loan/interfaces/component-interfaces/QuotaFormProps";

import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";
import { formatMoney } from "@modules/core/utils/helpers";
import { useQuotaFormLoad } from "@modules/loan/hooks";
import { calculateQuotaMora } from "@modules/loan/utils/helpers";

const QuotaForm = (props: QuotaFormProps): JSX.Element => {
  const {
    loading,
    formData,
    formRef,
    errors,
    radioButtonData,
    totalToPay,
    payment,
    handleChange,
    handleSubmit,
    handleRadioChange,
  } = useQuotaFormLoad(props, validationSchema);

  return (
    <Form
      formTitle="Editar cuota"
      Icon={HandCash}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="quota-input-set" setStyle="flexForm">
        <Form.RadioButtonList
          id="isFullPayment"
          label="Tipo de pago *"
          errorMessage={errors["isFullPayment"].message}
          radioButtons={[
            {
              id: "option1",
              name: "isFullPayment",
              value: String(radioButtonData.option1),
              label: "Parcial",
              checked:
                radioButtonData.selectedValue ===
                String(radioButtonData.option1),
              onChange: handleRadioChange,
            },
            {
              id: "option2",
              name: "isFullPayment",
              value: String(radioButtonData.option2),
              label: "Completo",
              checked:
                radioButtonData.selectedValue ===
                String(radioButtonData.option2),
              onChange: handleRadioChange,
            },
          ]}
        />
        <Form.Input
          id="balance"
          name="balance"
          label="Monto de cuota *"
          type="number"
          placeholder="Digita el monto del préstamo"
          value={formData.balance}
          errorMessage={errors["balance"].message}
          Icon={Cash}
          onChange={handleChange}
          disabled={radioButtonData.selectedValue === "true"}
        />
        {payment?.paymentStatus === "Mora" ? (
          <p className="paragraph">
            Valor de mora sugerido:{" "}
            {formatMoney(
              calculateQuotaMora(payment?.amount, payment?.paymentCycle)
            )}
          </p>
        ) : null}

        {payment?.paymentStatus === "Mora" ? (
          <Form.Input
            id="interests"
            name="interests"
            label="Valor de mora *"
            type="number"
            placeholder="Digita el monto adicional"
            value={formData.interests}
            errorMessage={errors["interests"].message}
            Icon={Cash}
            onChange={handleChange}
          />
        ) : null}
      </Form.FieldSet>
      <h2 className="buttonText">
        Valor total a pagar: {formatMoney(totalToPay)}
      </h2>
      <Form.IconButton
        id="button-pay-quota"
        type="submit"
        title="Agregar abono"
        Icon={Cash}
        label="Pagar cuota"
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
    </Form>
  );
};

export default QuotaForm;

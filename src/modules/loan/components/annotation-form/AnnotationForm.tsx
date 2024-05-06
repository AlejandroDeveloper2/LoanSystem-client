import { AlignCenter, FloppyDisk, TextSquare } from "iconoir-react";

import { AnnotationFormProps } from "@modules/loan/interfaces/component-interfaces/AnnotationFormProps";

import { useAnnotationFormLoad } from "@modules/loan/hooks";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const AnnotationForm = ({
  annotation,
  mode,
  toggleModal,
}: AnnotationFormProps): JSX.Element => {
  const { loading, formData, formRef, errors, handleChange, handleSubmit } =
    useAnnotationFormLoad(mode, annotation, validationSchema, toggleModal);

  return (
    <Form
      formTitle={mode === "add" ? "Crear anotación" : "Editar anotación"}
      Icon={TextSquare}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="annotation-input-set" setStyle="flexForm">
        <Form.Input
          id="title"
          name="title"
          label="Titulo"
          type="text"
          placeholder="Digita el titulo de la anotación"
          value={formData.title}
          errorMessage={errors["title"].message}
          Icon={TextSquare}
          onChange={handleChange}
        />
        <Form.TextArea
          id="description"
          name="description"
          label="Descripción"
          placeholder="Escribe la descripción"
          value={formData.description}
          errorMessage={errors["description"].message}
          Icon={AlignCenter}
          onChange={handleChange}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-create"
        type="submit"
        title={mode === "add" ? "Crear Anotación" : "Editar anotación"}
        Icon={FloppyDisk}
        label={mode === "add" ? "Crear Anotación" : "Guardar cambios"}
        variant={mode === "add" ? "primary" : "warning"}
        loading={loading}
        onClick={() => {}}
      />
    </Form>
  );
};

export default AnnotationForm;

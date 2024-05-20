/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { GoogleDocs, Upload } from "iconoir-react";

import {
  initialErrors,
  initialValues,
} from "@modules/clients/constants/uploadDocInitialValues";

import { UploadDocFormProps } from "@modules/clients/interfaces/components-interfaces/UploadDocFormProps";
import { UploadDocFormData } from "@modules/clients/interfaces/data-interfaces";

import { useClientsStore } from "@modules/clients/state-store";
import { useForm, useInputFile, useLoading } from "@modules/core/hooks";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const UploadDocForm = ({
  clientId,
  clientDocUrl,
  fileType,
  fileName,
  toggleModal,
}: UploadDocFormProps): JSX.Element => {
  function action() {
    if (clientDocUrl === null || clientDocUrl === "null") {
      uploadClientDoc(
        clientId,
        formData.clientDoc as Blob,
        formData.fileType,
        toggleLoading
      ).then(() => {
        toggleModal();
      });
      return;
    }
    updateClientDoc(
      clientId,
      formData.clientDoc as Blob,
      formData.fileType,
      toggleLoading
    ).then(() => {
      toggleModal();
    });
  }

  const { loading, toggleLoading } = useLoading();
  const { uploadClientDoc, updateClientDoc } = useClientsStore();

  const {
    formData,
    formRef,
    errors,
    handleChange,
    handleSubmit,
    updateFormInitialValues,
  } = useForm<UploadDocFormData>(
    initialValues,
    initialErrors,
    "add",
    validationSchema,
    action
  );

  const { file, loadingDoc, uploadFile } = useInputFile();

  useEffect(() => {
    updateFormInitialValues({
      ...initialValues,
      clientDoc: file,
      fileType,
    });
  }, [file]);

  return (
    <Form
      formTitle="Subir documento"
      Icon={GoogleDocs}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="upload-doc-input-set" setStyle="flexForm">
        <Form.Select
          id="fileType"
          name="fileType"
          label="Tipo de documento *"
          value={formData.fileType}
          errorMessage={errors["fileType"].message}
          options={[
            { label: "Cédula", value: "identificationCard" },
            { label: "Carta de trabajo", value: "jobLetter" },
            { label: "Estados de cuenta nómina", value: "payrollStatements" },
          ]}
          Icon={GoogleDocs}
          onChange={handleChange}
          disabled={true}
        />

        <Form.InputFile
          Icon={Upload}
          value={file}
          label="Seleccionar archivo"
          id="clientDoc"
          title="Seleccionar documento"
          fileName={fileName}
          variant="neutral"
          errorMessage={errors["clientDoc"].message}
          loading={loadingDoc}
          onChange={uploadFile}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-upload-doc"
        type="submit"
        title={
          clientDocUrl !== "null" ? "Actualizar documento" : "Subir documento"
        }
        Icon={Upload}
        label={
          clientDocUrl !== "null" ? "Actualizar documento" : "Subir documento"
        }
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
    </Form>
  );
};

export default UploadDocForm;

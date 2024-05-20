/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { GoogleDocs, Upload } from "iconoir-react";

import {
  initialErrors,
  initialValues,
} from "@modules/loan/constants/uploadDocInitialValues";

import { UploadDocFormProps } from "@modules/loan/interfaces/component-interfaces/UploadDocFormProps";
import { UploadDocFormData } from "@modules/loan/interfaces/data-interfaces";

import { useForm, useInputFile, useLoading } from "@modules/core/hooks";
import { useLoanStore } from "@modules/loan/state-store";
import { validationSchema } from "./ValidationSchema";

import { Form } from "@modules/core/components";

const UploadDocForm = ({
  loanId,
  promissoryNoteUrl,
  fileType,
  fileName,
  toggleModal,
}: UploadDocFormProps): JSX.Element => {
  function action() {
    if (promissoryNoteUrl === null || promissoryNoteUrl === "null") {
      uploadPromissoryNote(
        loanId,
        formData.promissoryNote as Blob,
        formData.fileType,
        toggleLoading
      ).then(() => {
        toggleModal();
      });
      return;
    }
    updatePromissoryNote(
      loanId,
      formData.promissoryNote as Blob,
      formData.fileType,
      toggleLoading
    ).then(() => {
      toggleModal();
    });
  }

  const { loading, toggleLoading } = useLoading();
  const { uploadPromissoryNote, updatePromissoryNote } = useLoanStore();

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
      promissoryNote: file,
      fileType,
    });
  }, [file]);

  return (
    <Form
      formTitle="Subir pagaré"
      Icon={GoogleDocs}
      formRef={formRef}
      handleSubmit={handleSubmit}
    >
      <Form.FieldSet id="upload-doc-input-set" setStyle="flexForm">
        <Form.Select
          id="fileType"
          name="fileType"
          label="Tipo de pagaré *"
          value={formData.fileType}
          errorMessage={errors["fileType"].message}
          options={[
            { label: "Pagaré simple", value: "simple" },
            { label: "Pagaré notarial", value: "notarial" },
            { label: "Poder especial", value: "special" },
          ]}
          Icon={GoogleDocs}
          onChange={handleChange}
          disabled={true}
        />

        <Form.InputFile
          Icon={Upload}
          value={file}
          label="Seleccionar archivo"
          id="promissoryNote"
          title="Seleccionar documento"
          fileName={fileName}
          variant="neutral"
          errorMessage={errors["promissoryNote"].message}
          loading={loadingDoc}
          onChange={uploadFile}
        />
      </Form.FieldSet>
      <Form.IconButton
        id="button-upload-doc"
        type="submit"
        title={
          promissoryNoteUrl
            ? "Actualizar documento firmado"
            : "Subir documento firmado"
        }
        Icon={Upload}
        label={promissoryNoteUrl ? "Actualizar documento" : "Subir documento"}
        variant="primary"
        loading={loading}
        onClick={() => {}}
      />
    </Form>
  );
};

export default UploadDocForm;

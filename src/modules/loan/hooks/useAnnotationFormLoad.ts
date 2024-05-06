/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  initialErrors,
  initialValues,
} from "../constants/annotationInitialValues";

import { Annotation, AnnotationFormData } from "../interfaces/data-interfaces";
import { WrongInput } from "@modules/core/interfaces/data-interfaces";

import { useLoanStore } from "../state-store";
import { useForm, useLoading } from "@modules/core/hooks";

const useAnnotationFormLoad = (
  mode: "edit" | "add",
  annotation: Annotation,
  validationSchema: (
    formData: AnnotationFormData,
    formRef: React.RefObject<HTMLFormElement>
  ) => Promise<WrongInput>,
  toggleModal: () => void
) => {
  const params = useParams();
  const loanParam = params as { loanId: string };

  const { createAnnotation, updateAnnotation } = useLoanStore();
  const { loading, toggleLoading } = useLoading();

  const action = () => {
    if (mode === "add") {
      createAnnotation(loanParam.loanId, formData, toggleLoading).then(() => {
        toggleModal();
      });
      return;
    }
    updateAnnotation(
      annotation.id,
      loanParam.loanId,
      formData,
      toggleLoading
    ).then(() => {
      toggleModal();
    });
  };

  const {
    formData,
    formRef,
    errors,
    handleChange,
    handleSubmit,
    updateFormInitialValues,
  } = useForm<AnnotationFormData>(
    initialValues,
    initialErrors,
    mode,
    validationSchema,
    action
  );

  useEffect(() => {
    updateFormInitialValues({
      description: annotation?.description,
      title: annotation?.title,
    });
  }, [mode]);

  return {
    loading,
    formData,
    formRef,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useAnnotationFormLoad;

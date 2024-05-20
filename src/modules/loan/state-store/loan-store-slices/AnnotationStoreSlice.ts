import { StateCreator } from "zustand";
import { toast } from "react-toastify";

import { notePagination } from "@modules/loan/constants/storeInitialValues";

import {
  AnnotationSlice,
  LoanSlice,
  PaymentScheduleSlice,
  PromissoryNoteSlice,
} from "@modules/loan/interfaces/store-interfaces";
import {
  Annotation,
  AnnotationFilters,
  AnnotationFormData,
} from "@modules/loan/interfaces/data-interfaces";
import {
  ResponseGlobal,
  TableResponse,
} from "@modules/core/interfaces/data-interfaces";

import { AnnotationService } from "@modules/loan/services/Annotation.service";

const annotationService = new AnnotationService();

const createAnnotationStoreSlice: StateCreator<
  LoanSlice & PaymentScheduleSlice & PromissoryNoteSlice & AnnotationSlice,
  [],
  [],
  AnnotationSlice
> = (set) => ({
  annotations: [],
  notePagination,
  getAllAnnotations: async (
    loanId: string,
    page: number,
    limit: string,
    searchValue: string,
    annotationFilters: AnnotationFilters,
    filter: string,
    toggleLoading: (message: string, isLoading: boolean) => void,
    signal?: AbortSignal
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Cargando anotaciones...", true);
      const { body: annotations, pagination }: TableResponse<Annotation> =
        await annotationService.getAllAnnotations(
          loanId,
          token,
          page,
          limit,
          searchValue,
          annotationFilters,
          filter,
          signal
        );
      set({ annotations, notePagination: { ...pagination, limit } });
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al listar las anotaciones!");
    } finally {
      toggleLoading("", false);
    }
  },
  createAnnotation: async (
    loanId: string,
    annotation: AnnotationFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Creando anotación...", true);
      const { body: newAnnotation }: ResponseGlobal<Annotation> =
        await annotationService.createAnnotation(token, loanId, annotation);
      set(({ annotations }) => ({
        annotations: [...annotations, newAnnotation],
      }));
      toast.success("¡Anotación agregada correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al crear la anotacion!");
    } finally {
      toggleLoading("", false);
    }
  },
  updateAnnotation: async (
    annotationId: string,
    loanId: string,
    updatedAnnotation: AnnotationFormData,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Actualizando anotación...", true);
      const { body: updatedAnnotationRes }: ResponseGlobal<Annotation> =
        await annotationService.updateAnnotation(
          token,
          annotationId,
          loanId,
          updatedAnnotation
        );
      set(({ annotations }) => ({
        annotations: annotations.map((annotation) => {
          if (annotation.id === annotationId) return updatedAnnotationRes;
          return annotation;
        }),
      }));
      toast.success("¡Anotación actualizada correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al actualizar la anotacion!");
    } finally {
      toggleLoading("", false);
    }
  },

  deleteAnnotation: async (
    annotationId: string,
    toggleLoading: (message: string, isLoading: boolean) => void
  ): Promise<void> => {
    const token: string = window.localStorage.getItem("token") ?? "";
    try {
      toggleLoading("Eliminando anotación...", true);
      const { body: deletedAnnotation }: ResponseGlobal<{ id: string }> =
        await annotationService.deleteAnnotation(token, annotationId);
      set(({ annotations }) => ({
        annotations: annotations.filter(
          (annotation) => annotation.id !== deletedAnnotation.id
        ),
      }));
      toast.success("¡Anotación eliminada correctamente!");
    } catch (e: unknown) {
      toast.error("¡Ha ocurrido un error al eliminar la anotacion!");
    } finally {
      toggleLoading("", false);
    }
  },
});

export default createAnnotationStoreSlice;

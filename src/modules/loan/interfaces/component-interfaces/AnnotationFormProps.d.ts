import { Annotation } from "../data-interfaces";

export interface AnnotationFormProps {
  annotation: Annotation;
  mode: "edit" | "add";
  toggleModal: () => void;
}

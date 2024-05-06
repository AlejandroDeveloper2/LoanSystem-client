import {
  CustomFormProps,
  FieldSetProps,
} from "@modules/core/interfaces/components-interfaces/FormProps";

import {
  IconButton,
  InputFile,
  InputIndicator,
  InputText,
  LabeledButton,
  RadioButtonList,
  Select,
  TextArea,
} from "..";

import styles from "./Form.module.css";

const Form = ({
  children,
  formTitle,
  Icon,
  formRef,
  handleSubmit,
}: CustomFormProps): JSX.Element => {
  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <figure className={styles.formMark}>
        <Icon />
      </figure>
      <h2 className="heading2"> {formTitle} </h2>
      {children}
    </form>
  );
};

const FieldSet = ({ children, setStyle }: FieldSetProps): JSX.Element => {
  return (
    <fieldset className={styles.fieldset + " " + styles[setStyle]}>
      {children}
    </fieldset>
  );
};

Form.FieldSet = FieldSet;
Form.Input = InputText;
Form.Select = Select;
Form.RadioButtonList = RadioButtonList;
Form.TextArea = TextArea;
Form.InputFile = InputFile;
Form.InputIndicator = InputIndicator;
Form.LabeledButton = LabeledButton;
Form.IconButton = IconButton;

export default Form;

import { LabeledButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import { BaseButton } from "..";

const LabeledButton = ({
  label,
  children,
  ...props
}: LabeledButtonProps): JSX.Element => {
  return (
    <BaseButton {...props}>
      {children}
      <span className="buttonText">{label}</span>
    </BaseButton>
  );
};

export default LabeledButton;

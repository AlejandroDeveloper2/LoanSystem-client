import { IconButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import { LabeledButton } from "..";

const IconButton = ({ Icon, ...props }: IconButtonProps): JSX.Element => {
  return (
    <LabeledButton {...props}>
      <Icon />
    </LabeledButton>
  );
};
export default IconButton;

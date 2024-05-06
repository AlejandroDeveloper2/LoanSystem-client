import { IconOnlyButtonProps } from "@modules/core/interfaces/components-interfaces/ButtonProps";

import { BaseButton } from "..";

const IconOnlyButton = ({
  Icon,
  ...props
}: IconOnlyButtonProps): JSX.Element => {
  return (
    <BaseButton {...props}>
      <Icon />
    </BaseButton>
  );
};
export default IconOnlyButton;

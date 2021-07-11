import React from 'react';
import { ComponentWidgetButton } from '../../../typings/strapi';
import { Link } from '../../Atoms';
import Button from '../../Button';

export interface Props {
  data: ComponentWidgetButton;
}

const ButtonField: React.FC<Props> = ({
  data: { buttonText, variant, action },
}: Props) => {
  return (
    <Button center variant={variant} type="button">
      <Link to={action}>{buttonText}</Link>
    </Button>
  );
};

export default ButtonField;

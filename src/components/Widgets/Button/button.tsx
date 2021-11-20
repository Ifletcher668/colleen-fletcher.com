import React from 'react';
import { ComponentWidgetButton } from '../../../typings/strapi';
import { Link } from '../../Atoms';
import Button from '../../Button';

export interface Props {
  data: ComponentWidgetButton;
}

const ButtonField = ({
  data: { buttonText, variant, action },
}: Props): JSX.Element => {
  return (
    <Button center variant={variant} type="button">
      <Link to={action}>{buttonText}</Link>
    </Button>
  );
};

export default ButtonField;

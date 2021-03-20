import React from 'react';
import Button from '../../Button';
import { Link } from '../../Atoms';

export interface Props {
    data: StrapiComponentWidgetButton;
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

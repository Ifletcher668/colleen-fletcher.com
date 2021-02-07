import React from 'react';
import Button from '../../Button';
import PaintDripLink from '../../TransitionLink';

export interface Props {
    data: StrapiComponentWidgetButton;
}

const ButtonField: React.FC<Props> = ({
    data: { buttonText, variant, action },
}: Props) => {
    return (
        <Button center variant={variant} type="button">
            <PaintDripLink to={action}>{buttonText}</PaintDripLink>
        </Button>
    );
};

export default ButtonField;

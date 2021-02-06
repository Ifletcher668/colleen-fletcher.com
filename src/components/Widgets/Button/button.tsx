import React from 'react';
import Button from '../../../../Button';
import Alink from 'gatsby-plugin-transition-link/AniLink';

export interface Props {
    data: StrapiComponentWidgetButton;
}

const ButtonField: React.FC<Props> = ({
    data: {buttonText, variant, action},
}: Props) => {
    return (
        <Button center variant={variant} type="button">
            <Alink to={action}>{buttonText}</Alink>
        </Button>
    );
};

export default ButtonField;

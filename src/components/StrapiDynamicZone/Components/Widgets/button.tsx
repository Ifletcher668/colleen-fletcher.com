import React from 'react';
import Button from '../../../Button';
import Alink from 'gatsby-plugin-transition-link/AniLink';

export interface Props {
    data: StrapiComponentWidgetButton;
}

const ButtonField: React.FC<Props> = ({
    data: {buttonText, variant, action},
}: Props) => {
    return (
        <Alink to={action}>
            <Button variant={variant} type="button">
                {buttonText}
            </Button>
        </Alink>
    );
};

export default ButtonField;

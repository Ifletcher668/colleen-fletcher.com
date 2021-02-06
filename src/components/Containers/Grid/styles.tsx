import styled, {CSSObject} from 'styled-components';

interface Props extends DefaultProps {
    styling: CSSObject;
}

const defaultProps: CSSObject = {
    display: `grid`,
};

export const SectionGrid = styled.section<Props>`
    ${defaultProps};
    ${props => props.styling};
`;

export const ArticleGrid = styled.article<Props>`
    ${defaultProps};
    ${props => props.styling}
`;
export const AsideGrid = styled.aside<Props>`
    ${defaultProps};
    ${props => props.styling}
`;
export const Grid = styled.div<Props>`
    ${defaultProps};
    ${props => props.styling}
`;

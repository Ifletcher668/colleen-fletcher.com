import React from 'react';

interface Props extends DefaultProps {
    heading?: string | React.ReactNode;
    footer?: string | string[];
}

const Card: React.FC<Props> = ({
    heading = '',
    footer = [],
    classNames,
    children,
}: Props) => {
    return (
        <article className={`card ${classNames ? classNames.join('') : ''}`}>
            <div className="card-header">{heading}</div>
            <div className="card-body">{children}</div>
            <div className="card-footer">
                {Array.isArray(footer)
                    ? footer.map((item, idx) => {
                          return <p key={idx}>{item}</p>;
                      })
                    : footer}
            </div>
        </article>
    );
};

export default Card;

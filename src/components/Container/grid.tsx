import React from 'react';

interface Props extends DefaultProps {
    gap?: string | number; // grid-gap
    columns?: string | string[]; // grid-template-columns
    rows?: string | string[]; // grid-template-rows
    containerType?: 'article' | 'section';
}

const Grid: React.FC<Props> = ({
    classNames,
    children,
    containerType,
    gap = 0,
    columns = 'none',
    rows = 'none',
}: Props) => {
    const styles: React.CSSProperties = {
        display: 'grid',
        gridGap: gap,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
    };

    const classes = classNames ? classNames.join('') : '';

    switch (containerType) {
        case 'article':
            return (
                <article className={classes} style={styles}>
                    {children}
                </article>
            );
        case 'section':
            return (
                <section className={classes} style={styles}>
                    {children}
                </section>
            );

        default:
            return (
                <div className={classes} style={styles}>
                    {children}
                </div>
            );
    }
};

export default Grid;

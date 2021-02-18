import React, { useRef, useEffect } from 'react';

interface Props extends Pick<DefaultProps, 'children'> {
    onClickHandler: () => void;
}

const OutsideClickContainer = ({
    onClickHandler,
    children,
}: Props): JSX.Element => {
    const wrapperRef = useRef(null);

    useOutsideClickDetection(wrapperRef, onClickHandler);

    return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickContainer;

/**
 * Hook that alerts clicks outside of the passed ref
 */

const useOutsideClickDetection = (
    ref: React.RefObject<HTMLDivElement>,
    onClickHandler: () => void,
) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            //TODO: Figure out what type this is
            if (ref.current && !ref.current.contains(event.target)) {
                onClickHandler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [ref]);
};

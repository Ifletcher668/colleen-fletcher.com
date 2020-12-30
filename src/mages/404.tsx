import React from 'react';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Heading from '../components/Heading';

export default () => {
    return (
        <>
            <Heading level={1}>404</Heading>
            <div>
                <BackButton />
                <Button variant="primary">Try Here, instead</Button>
            </div>
        </>
    );
};

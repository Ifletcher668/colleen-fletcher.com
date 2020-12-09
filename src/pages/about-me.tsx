import React from 'react';
import {TransitionState} from 'gatsby-plugin-transition-link';

export default (props: PageProps) => {
    return (
        <TransitionState>
            {({mount, transitionStatus}) => {
                console.log(transitionStatus);
                return (
                    <>
                        <h1>About Page</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam ipsa minima illo quo officia facilis
                            recusandae ex adipisci, tempore nemo excepturi
                            incidunt nesciunt veniam perferendis suscipit odit
                            in modi consequuntur?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam ipsa minima illo quo officia facilis
                            recusandae ex adipisci, tempore nemo excepturi
                            incidunt nesciunt veniam perferendis suscipit odit
                            in modi consequuntur?
                        </p>
                        <h2>Heading Two</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam ipsa minima illo quo officia facilis
                            recusandae ex adipisci, tempore nemo excepturi
                            incidunt nesciunt veniam perferendis suscipit odit
                            in modi consequuntur?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam ipsa minima illo quo officia facilis
                            recusandae ex adipisci, tempore nemo excepturi
                            incidunt nesciunt veniam perferendis suscipit odit
                            in modi consequuntur?
                        </p>
                        <h3>Heading Two</h3>
                        <h3>Heading Two</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam ipsa minima illo quo officia facilis
                            recusandae ex adipisci, tempore nemo excepturi
                            incidunt nesciunt veniam perferendis suscipit odit
                            in modi consequuntur?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam ipsa minima illo quo officia facilis
                            recusandae ex adipisci, tempore nemo excepturi
                            incidunt nesciunt veniam perferendis suscipit odit
                            in modi consequuntur?
                        </p>
                    </>
                );
            }}
        </TransitionState>
    );
};

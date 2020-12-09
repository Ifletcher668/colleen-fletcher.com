import React, {useEffect, useState} from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import Layout from '../components/Layout';
export default (props: PageProps) => {
    return (
        <>
            <h1>Home Page</h1>
            <p>
                <span>Lorem ipsum dolor sit amet,</span> consectetur adipisicing
                elit. Aliquam ipsa minima illo quo officia facilis recusandae ex
                adipisci, tempore nemo excepturi incidunt nesciunt veniam
                perferendis suscipit odit in modi consequuntur?
            </p>
            <p>
                <Button type={'button'} variant={'primary'}>
                    Primary Button
                </Button>
                <Button type={'button'} variant={'secondary'}>
                    Secondary Button
                </Button>
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam ipsa minima illo quo officia facilis recusandae ex
                adipisci, tempore nemo excepturi incidunt nesciunt veniam
                perferendis suscipit odit in modi consequuntur?
            </p>
            <h2>Heading Two</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam ipsa minima illo quo officia facilis recusandae ex
                adipisci, tempore nemo excepturi incidunt nesciunt veniam
                perferendis suscipit odit in modi consequuntur?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam ipsa minima illo quo officia facilis recusandae ex
                adipisci, tempore nemo excepturi incidunt nesciunt veniam
                perferendis suscipit odit in modi consequuntur?
            </p>
            <h3>Heading Three</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam ipsa minima illo quo officia facilis recusandae ex
                adipisci, tempore nemo excepturi incidunt nesciunt veniam
                perferendis suscipit odit in modi consequuntur?
            </p>
            <h4>Heading Four</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam ipsa minima illo quo officia facilis recusandae ex
                adipisci, tempore nemo excepturi incidunt nesciunt veniam
                perferendis suscipit odit in modi consequuntur?
            </p>
            <h5>Heading Five</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam ipsa minima illo quo officia facilis recusandae ex
                adipisci, tempore nemo excepturi incidunt nesciunt veniam
                perferendis suscipit odit in modi consequuntur?
            </p>
            <h6>Heading Six</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam ipsa minima illo quo officia facilis recusandae ex
                adipisci, tempore nemo excepturi incidunt nesciunt veniam
                perferendis suscipit odit in modi consequuntur?
            </p>
        </>
    );
};

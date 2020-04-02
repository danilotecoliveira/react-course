import React, { Fragment } from 'react';
import Header from './Header';

const Livros = () =>{

    return (
        <Fragment>
            <Header />
            <div className="container mb-10">
                <h1>Livros</h1>
            </div>
        </Fragment> 
    );
}

export default Livros;
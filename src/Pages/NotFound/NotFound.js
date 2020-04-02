import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';

const NotFound = () =>{

    return (
        <Fragment>
            <Header />
            <div className="container mb-10">
                <h1>Página não encontrada</h1>
            </div>
        </Fragment> 
    );
}

export default NotFound;
import React, { Fragment, Component } from 'react';
import Header from './Header';
import TabelaAutores from './TabelaAutores';

class Autores extends Component {
    
    state = {
        autores: [
          {
            nome: 'Paulo'
          },
          {
            nome: 'Daniel'
          },
          {
            nome: 'Marcos'
          },
          {
            nome: 'Bruno'
          }
        ],
      };

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container mb-10">
                    <h1>Autores</h1>
                    <TabelaAutores autores = { this.state.autores } />
                </div>
            </Fragment> 
        );
    }
}

export default Autores;
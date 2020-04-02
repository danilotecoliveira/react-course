import React, { Fragment, Component } from 'react';
import Header from './Header';
import TabelaLivros from './TabelaLivros';

class Livros extends Component {

    state = {
        livros: [
          {
            livro: 'React'
          },
          {
            livro: 'Java'
          },
          {
            livro: 'Design'
          },
          {
            livro: 'DevOps'
          }
        ],
    };

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container mb-10">
                    <h1>Livros</h1>
                    <TabelaLivros livros = { this.state.livros } />
                </div>
            </Fragment> 
        );
    }
}

export default Livros;
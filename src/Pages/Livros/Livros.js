import React, { Fragment, Component } from 'react';
import Header from '../../Components/Header/Header';
//import TabelaLivros from './TabelaLivros';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../Utils/ApiService';

class Livros extends Component {

  constructor(props) {
    super(props);

    this.state = {
        livros: [],
        titulo: 'Livros'
    };
  }

  // render() {
  //       return (
  //           <Fragment>
  //               <Header />
  //               <div className="container mb-10">
  //                   <h1>Livros</h1>
  //                   <TabelaLivros livros = { this.state.livros } />
  //               </div>
  //           </Fragment> 
  //       );
  //   }

  componentDidMount(){
    ApiService.ListaAutores()
      .then(res => {
        if(res.message === 'success'){
          this.setState({livros: [...this.state.livros, ...res.data]})
        } 
      })
  }

  render() {
    return (
        <Fragment>
            <Header />
            <div className='container'>
                <h1>Página de Livros</h1>
                <DataTable dados={this.state.livros} titulo={this.state.titulo} colunas={['livro']}/>
            </div>
        </Fragment>
    );
  }
}

export default Livros;
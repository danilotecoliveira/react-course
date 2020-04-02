import React, { Fragment, Component } from 'react';
import Header from '../../Components/Header/Header';
//import TabelaAutores from './TabelaAutores';
import DataTable from '../../Components/DataTable/DataTable';
import ApiService from '../../Utils/ApiService';

class Autores extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            nomes: [],
            titulo: 'Autores'
        };
      }

    // render() {
    //     return (
    //         <Fragment>
    //             <Header />
    //             <div className="container mb-10">
    //                 <h1>Autores</h1>
    //                 <TabelaAutores autores = { this.state.autores } />
    //             </div>
    //         </Fragment> 
    //     );
    // }

    componentDidMount(){
      ApiService.ListaAutores()
        .then(res => {
          if(res.message === 'success'){
            this.setState({nomes: [...this.state.nomes, ...res.data]})
          } 
        })
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className='container'>
                    <h1>Página de Autores</h1>
                    <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']}/>
                </div>
            </Fragment>
        );
      }
}

export default Autores;
import React, { Component } from 'react';

const TabelaLivrosHead = () => {
    return(
        <thead>
            <tr>
                <th>Livros</th>
            </tr>
        </thead>
    );
}

const TabelaLivrosBody = (props) => {

    const linhas = props.livros.map((linha, index) => {
        
        return(
            <tr key={index}>
                <td>{linha.livro}</td>
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class TabelaLivros extends Component {

    render() {

        const { livros } = this.props;

        return (
            <table className="centered highlight">
                <TabelaLivrosHead />
                <TabelaLivrosBody livros = {livros} />
            </table>
        );
    }
}

export default TabelaLivros;
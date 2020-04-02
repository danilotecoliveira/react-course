import React, { Component } from 'react';

const TabelaAutoresHead = () => {
    return(
        <thead>
            <tr>
                <th>Autores</th>
            </tr>
        </thead>
    );
}

const TabelaAutoresBody = (props) => {

    const linhas = props.autores.map((linha, index) => {
        return(
            <tr key={index}>
                <td>{linha.nome}</td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class TabelaAutores extends Component {

    render() {

        const { autores } = this.props;

        return (
            <table className="centered highlight">
                <TabelaAutoresHead />
                <TabelaAutoresBody autores = { autores } />
            </table>
        );
    }
}

export default TabelaAutores;
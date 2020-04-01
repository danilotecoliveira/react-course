import React, { Component } from 'react';
import FormValidator from './FormValidator';

class Formulario extends Component {

    constructor(props) {
        
        super(props);

        this.validador = new FormValidator({
            campo: 'nome',
            metodo: 'isEmpty'
        });

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitFormulario = () => {

        if (this.validador.valida(this.state)) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        }
    }

    render() {
        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input id="nome" type="text" name="nome" className="validate" value={nome} onChange = {this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input id="livro" type="text" name="livro" className="validate" value={livro} onChange = {this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input id="preco" type="number" name="preco" className="validate" value={preco} onChange = {this.escutadorDeInput} />
                    </div>
                    <button onClick = { this.submitFormulario } type="button" className="waves-effect waves-light indigo lighten-2 btn">Salvar</button>
                </div>
            </form>
        );
    }
}

export default Formulario;
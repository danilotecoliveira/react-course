import validator from 'validator';

class FormValidator {

    constructor(validacao) {
        this.validacao = validacao;
    }

    valida(state) {
        
        const campoValor = state[this.validacao.campo.toString()];
        const metodoValidacao = validator[this.validacao.metodo];

        if (metodoValidacao(campoValor, [], state)) {
            return false;
        }
        
        return true;
    }
}

export default FormValidator;
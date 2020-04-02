const baseUrl = 'http://localhost:8000/api';

const ApiService = {

    ListaAutores: () => {
        return fetch(`${baseUrl}/autor`)
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());
    },

    CriaAutor: autor => {
        return fetch(
            `${baseUrl}/autor`, 
            {
                method: 'POST', 
                headers: { 'content-type' : 'application/json' },
                body: autor
            }
        )
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());;
    },

    ListaNomes: () => {
        return fetch(`${baseUrl}/autor/nome`)
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());;
    },

    ListaLivros: () => {
        return fetch(`${baseUrl}/autor/livro`)
            .then(res => ApiService.TrataErros(res))
            .then(res => res.json());;
    },

    RemoveAutor: id => {
        return fetch(
            `${baseUrl}/autor/${id}`, 
            {
                method: 'DELETE',
                headers: { 'content-type' : 'application/json' }
            }
        )
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },

    TrataErros: (res) => {
        if (!res.ok) {
            throw new Error(res.responseText);
        }

        return res;
    }
}

export default ApiService;
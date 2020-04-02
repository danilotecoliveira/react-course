const baseUrl = 'http://localhost:8000/api';

const ApiService = {

    ListaAutores: () => {
        return fetch(`${baseUrl}/autor`)
        .then(res => res.json())
    },

    CriaAutor: autor => {
        return fetch(
            `${baseUrl}/autor`, 
            {
                method: 'POST', 
                headers: { 'contentType' : 'json/appication' },
                body: autor
            }
        )
        .then(res => res.json());
    },

    ListaNomes: () => {
        return fetch(`${baseUrl}/autor/nome`)
        .then(res => res.json())
    },

    ListaLivros: () => {
        return fetch(`${baseUrl}/autor/livros`)
        .then(res => res.json())
    },

    RemoveAutor: id => {
        return fetch(
            `${baseUrl}/autor/${id}`, 
            {
                method: 'DELETE',
                headers: { 'contentType' : 'json/appication' }
            }
        )
        .then(res => res.json())
    }
}

export default ApiService;
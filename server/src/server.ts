import express, { response } from 'express';

const app = express();

// Rota: endereco completo da requisicao
// Recurso: qual entidade estamos acessando no sistema

// GET: Pegar uma ou mais informacoes do back-end
// POST: Criar uma nova informacao no back-end
// PUT: Atualizar uma informacao existente no back end
// DELETE: Remover uma informacao do back-end

// POST: http://localhost:3333/users = criar um usuario
// GET: http://localhost:3333/users = pegar informacoes de um usuario
// GET: http://localhost:3333/users/5 = pegar informacoes do usuario com id 5

 const users = [
    'Ana',
    'Paulo',
    'Maiara'
]

app.get('/users', (request, response) => {
    // Listar usuarios
    return response.json(users);
})

app.get('/users/:id', (request, response) => {
    // listar um usuario
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    // criar um usuario

    const user = {
        nome: 'Felipe',
        email: 'felipe@email.com'
    }

    return response.json(user);
})

app.listen(3333);
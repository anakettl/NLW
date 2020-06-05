import express, { response } from 'express';

const app = express();

app.use(express.json());

// Rota: endereco completo da requisicao
// Recurso: qual entidade estamos acessando no sistema

// GET: Pegar uma ou mais informacoes do back-end
// POST: Criar uma nova informacao no back-end
// PUT: Atualizar uma informacao existente no back end
// DELETE: Remover uma informacao do back-end

// POST: http://localhost:3333/users = criar um usuario
// GET: http://localhost:3333/users = pegar informacoes de um usuario
// GET: http://localhost:3333/users/5 = pegar informacoes do usuario com id 5

// Request param: parametros que vem na propria rota, obrigatorios
// Query param: quem determina o nome do parametro é quem faz a requisicao, geralmente opcionais para filtros, paginacao
// Request: 

 const users = [
    'Ana',
    'Paulo',
    'Maiara'
]

app.get('/users', (request, response) => {
    // Listar usuarios
    const search = String(request.query.search);

    // se tiver search, retorna os usuarios filtrados pelo parametro, se nao tiver retorna todos os usuarios
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
})

app.get('/users/:id', (request, response) => {
    // listar um usuario
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
    // criar um usuario
    const data = request.body;

    const user = {
        nome: data.name,
        email: data.email
    }

    return response.json(user);
})

app.listen(3333);
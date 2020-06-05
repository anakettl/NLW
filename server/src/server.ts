import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Ana',
        'Gato',
        'Mala',
        'Abacaxi',
        'Feira',
        'Organica',
        'Pare',
        'Ja'
    ]);
})

app.listen(3333);
const express = require('express');

const app = express();

app.get('/home', (req, res)=>{
    res.send('Olá... Esse é o meu primeiro servidor com o express')
});

app.get('/', (req, res)=>{
    res.send('Essa é minha rota principal')
});

app.get('/array', (req, res)=>{
    const array = [1, 2, 3, 4, 5]
    res.send(array)
});

app.listen(3000);
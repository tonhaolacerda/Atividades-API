const express = require('express');

const app = express();

const port = 3000;

const tarefas = [
    { id: 1, titulo: "Fazer atividades de PTAC", concluida: false },
    { id: 2, titulo: "Estudar banco de dados", concluida: true },
    { id: 3, titulo: "Desligar servidor", concluida: false }
];

app.get("/tarefas", (res,req) => {
    res.json(tarefas);
});


app.get('/', (req,res, next) => {
    console.log('API de tarefas no ar')
    res.send('OK')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});
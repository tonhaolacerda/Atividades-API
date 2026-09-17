const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req,res, next) => {
    console.log('API de tarefas no ar')
    res.send('OK')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});
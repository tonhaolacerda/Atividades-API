const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const tarefas = [
    { id: 1, titulo: "Fazer atividades de PTAC", concluida: false },
    { id: 2, titulo: "Estudar banco de dados", concluida: true },
    { id: 3, titulo: "Desligar servidor", concluida: false }
];

app.post('/tarefas', (req, res) => {
  const titulo = req.body.titulo;

  const novaTarefa = {
    id: tarefas.length + 1,
    titulo: titulo,
    concluida: false // toda tarefa nova começa como não concluída
  };

    tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

app.get('/tarefas', (req, res) => {
 const query = req.query.concluida;

  if (query) {
    const status = query === 'true';
    const filtradas = tarefas.filter(t => t.concluida === status);
    return res.json(filtradas);
  }

  res.json(tarefas);
});

app.get('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === idBusca);

  if (!tarefa) {
    return res.status(404).json({ erro: 'Tarefa não encontrada' });
  }

app.get('/', (req,res,) => {
    console.log('API de tarefas no ar')
    res.send('OK')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

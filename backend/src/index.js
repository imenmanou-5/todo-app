import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let todos = [];
let id = 1;

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: id++, title, completed: false };
  todos.push(newTodo);
  res.json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: 'Deleted' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

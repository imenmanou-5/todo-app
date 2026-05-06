import request from 'supertest';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];
let id = 1;

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
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

test('GET /health retourne OK', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('OK');
});

test('GET /api/todos retourne tableau vide', async () => {
  const res = await request(app).get('/api/todos');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test('POST /api/todos crée une tâche', async () => {
  const res = await request(app)
    .post('/api/todos')
    .send({ title: 'Test tâche' });
  expect(res.statusCode).toBe(200);
  expect(res.body.title).toBe('Test tâche');
});

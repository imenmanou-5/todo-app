import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/todos`);
      setTodos(res.data);
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async () => {
    if (!input.trim()) return;
    try {
      await axios.post(`${API_URL}/api/todos`, { title: input });
      setInput('');
      fetchTodos();
    } catch (error) {
      console.error('Erreur ajout:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  };

  if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Chargement...</div>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>📋 Todo App DevOps</h1>
      <p>Bienvenue sur votre application Todo !</p>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ajouter une tâche..."
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={addTodo} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          ➕ Ajouter
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span>{todo.title}</span>
            <button 
              onClick={() => deleteTodo(todo.id)} 
              style={{ marginLeft: '10px', cursor: 'pointer', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px' }}
            >
              ❌ Supprimer
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>Aucune tâche pour le moment. Ajoutez-en une !</p>}
    </div>
  );
}

export default App;

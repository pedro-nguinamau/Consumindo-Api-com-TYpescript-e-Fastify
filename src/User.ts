import { FastifyInstance } from "fastify";
import axios from "axios";

export async function userRoutes(app: FastifyInstance) {

  // URL base da API externa
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Rota para buscar todos os usuários
app.get('/users', async (request, reply) => {
  try {
    const { data } = await axios.get(API_URL);
    reply.send(data);
  } catch (error) {
    reply.status(500).send({ error: 'Erro ao buscar os usuários.' });
  }
});

// Rota para buscar um usuário por ID
app.get('/users/:id', async (request, reply) => {
  const { id } = request.params as { id: string };
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    reply.send(data);
  } catch (error) {
    reply.status(404).send({ error: 'Usuário não encontrado.' });
  }
});

// Rota para filtrar usuários por cidade
app.get('/users/city/:city', async (request, reply) => {
  const { city } = request.params as { city: string };
  try {
    const { data } = await axios.get(API_URL);
    const filteredUsers = data.filter((user: any) => user.address.city.toLowerCase() === city.toLowerCase());
    reply.send(filteredUsers);
  } catch (error) {
    reply.status(500).send({ error: 'Erro ao filtrar usuários por cidade.' });
  }
});
}
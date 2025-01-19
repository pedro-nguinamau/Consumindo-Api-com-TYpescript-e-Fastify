import fastify from "fastify";
import { userRoutes } from "./User";
const server = fastify();

server.get('/', (request, reply) => {
    reply.send('Consumindo-Api-com-TYpescript-e-Fastify')
})
server.register(userRoutes)
server.listen({port: 3333}, async (err, adress) => {
    if(err) {
        console.log(err)
    }
    console.log(`Server listen in this ${adress}`)
});

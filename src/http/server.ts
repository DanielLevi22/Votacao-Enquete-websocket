import { fastify } from "fastify";
import { createPool } from "./routes/create-poll";
import { getPool } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from '@fastify/cookie'
import fastifyWebsocket from "@fastify/websocket";
import { pollResults } from "./ws/poll-results";

const app = fastify()
app.register(cookie, {
  secret: 'polls-app-app-secret',
  hook: 'onRequest',
})

app.register(fastifyWebsocket)
app.register(createPool)
app.register(getPool)
app.register(voteOnPoll)
app.register(pollResults)




app.listen({
  port: 3333,
}).then(() => {
  console.log('server listening on port 3333')
})
// IMPORTS FASTIFY E PLUGINS
import Fastify from "fastify";
import cors from "@fastify/cors";
import { auth } from "./lib/auth.js";
import cookie from "@fastify/cookie";
import "dotenv/config";

//CRIAR INSTÂNCIA DO SERVIDOR
const app = Fastify({
  logger: true,
});

//REGISTRSR PLUGINS
await app.register(cors, {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
});

//PLUGIN COOKIES
await app.register(cookie);
///ROTAS DO BETTER AUTH

// Register authentication endpoint
app.route({
  method: ["GET", "POST"],
  url: "/api/auth/*",
  async handler(request, reply) {
    try {
      // Construct request URL
      const protocol = request.headers["x-forwarded-proto"] || "http";
      const url = new URL(request.url, `${protocol}://${request.headers.host}`);

      // Convert Fastify headers to standard Headers object
      const headers = new Headers();
      Object.entries(request.headers).forEach(([key, value]) => {
        if (value) headers.append(key, value.toString());
      });
      // Create Fetch API-compatible request
      const req = new Request(url.toString(), {
        method: request.method,
        headers,
        body: request.body ? JSON.stringify(request.body) : undefined,
      });
      // Process authentication request
      const response = await auth.handler(req);
      // Forward response to client
      reply.status(response.status);
      response.headers.forEach((value, key) => reply.header(key, value));
      reply.send(response.body ? await response.text() : null);
    } catch (error) {
      app.log.error({
        msg: "Authentication Error",
        error: error instanceof Error ? error.message : error,
      });
      reply.status(500).send({
        error: "Internal authentication error",
        code: "AUTH_FAILURE",
      });
    }
  },
});
//DECLARAÇÃO DE ROTA
app.get("/health", async () => {
  return { status: "ok" };
});

//SUBINDO SERVIDOR
try {
  await app.listen({ port: 3333 });
  console.log("Servidor rodando em http://localhost:3333");
} catch (err) {
  app.log.error(err);
  process.exit(1);
}

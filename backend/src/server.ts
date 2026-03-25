// IMPORTS FASTIFY E PLUGINS
import Fastify from "fastify";
import cors from "@fastify/cors";

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

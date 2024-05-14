// contient la configuration du serveur ainsi que le démarrage

const http = require("http");

const hostname = "127.0.0.1";
const port = 8888;

const server = http.createServer((req, res) => {
  res.statut = 200;
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");
  res.end("Serveur crée \n");
});

server.listen(port, hostname, () => {
  console.log(`Le serveur tourne à l'adresse :\n http://${hostname}:${port}/`);
});

// on appel l'outil module.export afin de pouvoir appeler le serveur ailleurs
module.exports = server;

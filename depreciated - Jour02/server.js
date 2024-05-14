// contient la configuration du serveur ainsi que le démarrage

const http = require("http");
const routes = require("./routes");

const hostname = "127.0.0.1";
const port = 8888;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");
  //   res.end("Serveur crée \n") --> cette ligne doit être surpprimer sinon le serveur ne sait pas quel end fournir sur la page;
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Le serveur tourne à l'adresse :\n http://${hostname}:${port}/`);
});

// on appel l'outil module.export afin de pouvoir appeler le serveur ailleurs
module.exports = server;

// fichier dans lequel le serveur est crée

import { createServer } from "http";
import routes from "./routes.js";

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=UTF-8");
  if (routes[req.url]) {
    routes[req.url](req, res);
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

console.log("----------------------------------");
console.log("le serveur est en cour d'éxécution");
console.log("----------------------------------");

export default server;

// contient l'ensemble des routes vers l'API

console.log("le fichier se lit");
const server = require("./server");

// Définition des routes
const routes = {
  "/": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  },
  "/about": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About this app");
  },
  "/another": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("An another page to see if it's work");
  },
};

module.exports = routes;

// fichier dans lequel il y a les fonctions pour les routes

// Définition des routes
const routes = {
  "/": (req, res) => {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello World !");
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Ce n'est pas la bonne méthode");
    }
  },
  "/tasks": (req, res) => {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Méthode GET fonctionnelle");
    } else if (req.method === "POST") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Méthode POST focntionnelle");
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Ce n'est pas la bonne méthode");
    }
  },
  "/tasks/:remplacer": (req, res) => {
    if (req.method === "PUT") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Méthode PUT fonctionnelle");
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Ce n'est pas la bonne méthode");
    }
  },
  "/tasks/:supprimer": (req, res) => {
    if (req.method === "DELETE") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Méthode DELETE fonctionnelle");
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Ce n'est pas la bonne méthode");
    }
  },
};

console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("provient du fichier routes.js - le fichier se lit");
console.log("- - - - - - - - - - - - - - - - - - - - - - - - -");

export default routes;

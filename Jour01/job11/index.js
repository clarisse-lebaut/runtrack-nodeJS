const http = require("http"); //on apppel le module natif de Node.js http

const hostname = "127.0.0.1"; // ceci est une adresse générique pour être lu par une machine en local
const port = 8888; // ceci est le nom de l'hôte sur lesquels les requêtes sont écoutés

const server = http.createServer((req, res) => {
  res.statusCode = 200; // c'est le code qui permet de dire que ça marche
  res.setHeader("Content-Type", "text/plain"); //permet de définir les paramètres de ce qui sera affiché
  res.end("Hello World\n"); //ici c'est ce qui est affiché dans la page web une fois qu'on suit le lien
});

server.listen(port, hostname, () => {
  // donc la on lance les variable qui ont définit le serveur et on print le lien qui
  // donne accée à la page web
  console.log(`Le serveur est en cour d'éxécution à l'adress suivante : 
  http://${hostname}:${port}/`);
});

// pour stopper le run du script qui donne accée à la requête = CTRL+C

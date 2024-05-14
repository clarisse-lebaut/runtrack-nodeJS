// fichier dans lequel le serveur est appelé

import server from "./server.js";

// acccées au serveur dans le navigateur internet
const port = 3000;
const hostname = "localhost";
server.listen(port, hostname, () => {
  console.log("-------------------------------------------------------------");
  console.log(`Le serveur tourne à l'adresse : http://${hostname}:${port}/`);
  console.log("-------------------------------------------------------------");
});

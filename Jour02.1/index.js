// fichier dans lequel le serveur est appelé

import server from "./server.js";
import routes from "./routes.js";
import fs from "fs";
import path from "path";

// Lire le fichier JSON
fs.readFile("data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Erreur lors de la lecture du fichier : ", err);
    return;
  }
  // ----- la ce sont les données DANS le fichier data.json
  // Parse le contenu JSON en objet JavaScript
  const data = JSON.parse(jsonString);
  // Extrait l'élément souhaité à partir de l'objet JavaScript
  const element = data.title;
  console.log(element);

  // ----- la ce sont les données générales du fichier data.json
  const filePath = "/Jour02.1/data.json";
  const baseName = path.basename(filePath);
  const dirName = path.dirname(filePath);
  const extName = path.extname(filePath);
  console.log(`Nom du fichier : ${baseName}`);
  console.log(`Extension du fichier : ${dirName}`);
  console.log(`Répertoire parent du fichier : ${extName}`);
});

// acccées au serveur dans le navigateur internet
const port = 3000;
const hostname = "localhost";
server.listen(port, hostname, () => {
  console.log("-------------------------------------------------------------");
  console.log(`Le serveur tourne à l'adresse : http://${hostname}:${port}/`);
  console.log("-------------------------------------------------------------");
});

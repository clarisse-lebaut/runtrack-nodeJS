// import module express + création d'une instance

const express = require("express");
const app = express(); // création d'une instance d'Express
const path = require("path"); // permet de récupérer les chemins des fichiers qui seront envoyé comme réponse

// serveur static qui permet de servir des fichier static
// cette méthode permet de servir des fichier statics
app.use(express.static("publics"));

//  première page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html")); // important de mettre un double undescrore --> permet de faire correctement la syntaxe
});

// deuxième page
app.get("/about", (req, res) => {
  res.send("page a propos qui présente le projet");
});

// troisième page
app.get("/error404", (req, res) => {
  res.send("page 404");
});

// permet de lancer le serveur afin de rendre accessible les éléments
app.listen(80, () => {
  console.log("Server listening on port 3000");
  console.log(`http://localhost:80`);
  console.log("n'oublie de faire un CTRL+C pour fermer le serveur");
});

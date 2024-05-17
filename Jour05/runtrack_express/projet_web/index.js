// import module express + création d'une instance

const express = require("express");
const app = express(); // création d'une instance d'Express
const path = require("path"); // permet de récupérer les chemins des fichiers qui seront envoyé comme réponse

// serveur static qui permet de servir des fichier static
app.use(express.static(path.join(__dirname, "public")));

//  première page -- accueil
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html")); // important de mettre un double undescrore --> permet de faire correctement la syntaxe
});

// deuxième page -- a propos
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// page erreur 404 --> avec use, est appeler unqiement quand la page demandé n'existe pas
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error404.html"));
});

// permet de lancer le serveur afin de rendre accessible les éléments
app.listen(80, () => {
  console.log("Server listening on port 3000");
  console.log(`http://localhost:80`);
  console.log("n'oublie de faire un CTRL+C pour fermer le serveur");
});

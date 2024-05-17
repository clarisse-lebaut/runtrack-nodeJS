// import module express + création d'une instance

const express = require("express");
const app = express();

app.post("/etudiants", (req, res) => {
  res.send("méthode POST -- runtrack_express");
});

app.delete("/etudiant:id", (req, res) => {
  res.send("méthode DELETE -- runtrack_express");
});

// permet de lancer le serveur afin de rendre accessible les éléments
app.listen(80, () => {
  console.log(`http://localhost:80`);
  console.log("n'oublie de faire un CTRL+C pour fermer le serveur");
});

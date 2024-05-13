const fs = require("fs");

fs.readdir("../../../runtrack-nodeJS", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});

fs.readdir("../../Jour01", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(files);
});

// code d'erreur -4058 : le dossier / fichier demandé n'existe, est introuvable --> vérifier le chemin
// le principe de chemin reste le meme pour tous les langage
// il faut bien indiquer le nombre necessaire de "../" pour acceder au bon fichier

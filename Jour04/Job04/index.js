/* --- JOB 3 --- */
/* définir le schéma des étudiants, doit respecter le schéma initial dans la database */

// ici c'est l'import de mogoose
const mongoose = require("mongoose");

// ici on se connecte avec la serveur (je peux le voir avec MongoDB Compass)
mongoose.connect(
  "mongodb+srv://clarisselebaut:3W88gROblNsnOm88@runtracknodejscluster.s4u9s1x.mongodb.net/LaPlateforme"
);

// définir une constante --> new pour nouvelle mongoose pour le langage. Schema pour appeler le schéma de de la database
// on appelle ensuite le dossier years (RESPECT DE LA TYPO IMPORTANTE)
// on lui indique que ce qui sera ajouter sera une chaine de caractère
const schema = new mongoose.Schema({
  students: String,
});

// ici on demande simplement de respecter le schéma déjà établit dans la base de données
//
const Students = mongoose.model("students", schema, "students");

generate();
async function generate() {
  await new Students({ students: "Bachelor 1" }).save();
  await new Students({ students: "Bachelor 2" }).save();
  await new Students({ students: "Bachelor 3" }).save();
}

console.log("connexion établit ! Tu peux faire CTRL + C");

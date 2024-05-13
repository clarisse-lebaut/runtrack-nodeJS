import { readFileSync } from "fs";
// pour avoir le import en faut comme en ReactJS =
// il faut crée un fifchier Json pour indiquer qu'on appel un module
// il faut que le fichier JSON soit dans le dossier source et au minimum dans le dossier de travail

const data = readFileSync('data.txt', 'utf8');

console.log(data);
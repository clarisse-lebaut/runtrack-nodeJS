const path = require('path');

const filePath = '/Job05/index.js'

const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);
const extName = path.extname(filePath);

console.log(`Nom du fichier : ${baseName}`);
console.log(`Extension du fichier : ${dirName}`);
console.log(`Répertoire parent du fichier : ${extName}`);


// ----- path.join --> permet de joindre tout les éléments récupérer pour avoir le chemin complet
// const newFilePath = path.join(dirName, baseName);
// console.log(newFilePath);
// point d'entrée de l'API

//on importe le serveur dans ce fichier
const server = require('./server');

const port = 8888;

server.listen(port, () => {
    console.log (`Lien pour le serveur : http://localhost:${port}/`)
})
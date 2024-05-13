console.log("----------------------------------------------------------");
console.log("récupérer les informations d'URL");
console.log("----------------------------------------------------------");

const { URL, URLSearchParams } = require("url");

// analyser une URL
const myURL = new URL("https://www.google.com&search=nodejs");
console.log(`adresse complète de l'URL :  \n - ${myURL.href}`); // adresse complète : https://www.google.com/?search=nodejs
console.log(`protocole de l'URL : \n - ${myURL.protocol}`); // protocole utilisé : https:
console.log(`hôte de l'URL : \n - ${myURL.host}`); // hôte (comprend le nom et le numéro de port) : www.google.com
console.log(`nom de l'hôte de l'URL : \n - ${myURL.hostname}`); // nom d'hôte (affiche que le nom) : www.google.com
console.log(`chemin d'accées de l'URL : \n - ${myURL.pathname}`); // chemin d'accès de l'URL : /
console.log(`chaîne de requête de l'URL : \n - ${myURL.search}`); // affiche la chaîne de requête de l'URL, qui est la partie de l'URL qui suit le point d'interrogation et qui contient les paramètres de requête : ?search=nodejs

console.log("----------------------------------------------------------");
console.log("changer URL par nouvel URL");
console.log("----------------------------------------------------------");

// ----- ici on change l'URL par un nouvelle URL valide linkable
const newURL = new URL(myURL.pathname, "https://www.laplateforme.io?lang=fr"); //myURL.pathname --> permet de récupérer le nouveau lien/chemin et de remplacer l'ancien
newURL.search = myURL.search; //.search permet de copier la chaîne de requête de l'URL
console.log(`Protocole nouvelle URL : ${newURL.protocol}`);
console.log(`Nouvelle URL : ${newURL.toString()}`);
// ----- ajouter un paramètre à l'URL
const params = new URLSearchParams(newURL.search);
params.append("lang", "fr");
newURL.search = params.toString();
console.log(newURL.toString());
console.log(params); // pour pouvoir récupérer les informations après le ? dans la chaîne de requête...

console.log("");

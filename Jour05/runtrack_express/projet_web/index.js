// import module express + création d'une instance

const express = require("express");
const app = express(); // création d'une instance d'Express

//  première page
app.get("/", (req, res) => {
  res.send("page d'acceuil du site");
});

// deuxième page
app.get("/about", (req, res) => {
  res.send("page a propos qui présente le projet");
});

app.listen(80, () => {
  console.log("Server listening on port 3000");
  console.log(`http://localhost:80`);
});

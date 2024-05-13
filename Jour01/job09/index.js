const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
});

const data = "Je peux écrire ce que je veux dans cette phrase, elle remplacera le texte de data.txt";
const newData = data.replace();

fs.writeFile("data.txt", newData, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(newData);
});

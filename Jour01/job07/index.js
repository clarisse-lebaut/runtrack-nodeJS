import { readFile } from "fs";

readFile("data.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

//la syntaxe comporte des différences lorsque j'utilise l'import 
//l'import permet de na pas toujours rappeler le paramètre fs
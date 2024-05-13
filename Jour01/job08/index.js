const fs = require('fs');

fs.readFile("data.txt", "utf-8", (err, data) => {
if (err){
    console.log(err);
    return
}

let result = "";

for (let i = 0; i < data.length; i += 2) {
    result += data[i];
}

console.log(result);
})
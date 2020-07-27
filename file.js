const { readFile, readFileSync } = require("fs");

console.log(readFileSync('./dummy.txt', 'utf8'))

// readFile('./dummy.txt', 'utf8', (err, file) => {
//     console.log(file);
// });

console.log("li o arquivo e escrevi no console antes de ler");


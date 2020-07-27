const express = require("express");
const {
    readFile
} = require("fs");

var app = express();
app.use(express.static('public'));

app.get('/', function (request, response) {
    readFile('./hello-world.html', 'utf8', (err, file) => {
        if (err) {
            response.status(500).send("Aconteceu um erro ao processar sua requisicao");
        }
        response.send(file);
    })
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Estamos no ar com express');
});
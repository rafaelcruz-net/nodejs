const express = require("express");
const mongo = require("mongoose");

mongo.connect("mongodb://localhost:27017/twitch?authSource=admin", {
    useNewUrlParser: true,
    user: "rafaelcruz",
    pass: "123456#A",
});

const db = mongo.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"));

var app = express();
app.use(express.json());

const subscriberRoute = require("./routes/subscriber.route");
app.use("/subscriber", subscriberRoute);


app.listen(process.env.PORT || 3000, () => {
    console.log('Estamos no ar com express');
});
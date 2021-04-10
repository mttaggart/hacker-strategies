const express = require("express");
const fs = require("fs");
const PORT = 3000; 
const RED_FILE = "./red.txt";
const BLUE_FILE = "./blue.txt";
const RED = "red";
const BLUE = "blue";

// Load List Data
let decks = {}

function loadCards(file, deck, callback) {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) throw err;
        callback(data.split("\n"));
    });
}

function drawCard(deck) {
    return deck[Math.floor(Math.random() * deck.length)];
}

loadCards(RED_FILE, RED, (data) => decks.RED = data);
loadCards(BLUE_FILE, BLUE, (data) => decks.BLUE = data);

app = express();

app.route("/api/:color")
.get((req, res) => {
    
    switch(req.params.color.toLowerCase()) {
        case RED: 
            res.send(drawCard(decks.RED));
            break;
        case BLUE:
            res.send(drawCard(decks.BLUE));
            break;
        default:
            res.status(404);
            res.send("No such color found");
    }

});

app.listen(PORT, () => {console.log(`Listening on ${PORT}`);});

const express = require("express");
const fs = require("fs");

app = express();

app.route("/api")
.get((req, res) => {
    res.send("Yo");
});

app.listen(3000, () => {console.log("Listening");})

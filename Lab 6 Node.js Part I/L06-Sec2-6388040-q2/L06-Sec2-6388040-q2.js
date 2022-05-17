const path = require('path');
const express = require('express');
const app = express();

console.log(path.basename(__filename) + "\n");

console.log("Running at Port 3030");

app.get("", function(req, res) {
    console.log("Req at: " + req.url);
    res.send("Hello World! in plain text")
});

app.get("/th", function(req, res) {
    console.log("Req at: " + req.url);
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/greeting_th.html'));
});

app.get("/cn", function(req, res) {
    console.log("Req at: " + req.url);
    res.sendFile(path.join(__dirname + '/greeting_cn.html'));
});

/* Invalid path */
app.use((req, res, next) => {
        console.log("Req at: " + req.url);
        res.status(404).send("Where are you going?");
    })
    /* Tell the port number */
app.listen(3030)
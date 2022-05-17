const path = require('path');
const express = require('express');
const app = express();

// Use Router object to handle routes
const router = express.Router();
app.use("/", router); // Register the router

// Middleware function (for POST)
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


console.log("Server listening at Port 3030");

// Sending contact form
app.get('/', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + '/contact_us.html'));
});

// Handle POST: Form submitted by POST
router.post("/submit-form", function(req, res) {
    // console.log(req.method); // Print POST / GET
    // console.log(req.body); // Contains the data in a string or JSON obj from the 'client side'
    const name = req.body.name;
    const messages = req.body.messages;
    const email = req.body.email;
    console.log(`Form submitted by ${name}`);
    res.send(`Greeting <mask style="background: #85c1e9">${name}</mask> The following message has been received: <mask style="background: #f8c471">${messages}</mask>. We will contact you via <mask style="background: #82e0aa">${email}</mask> later`)
});

// Tell the port number
app.listen(3030);
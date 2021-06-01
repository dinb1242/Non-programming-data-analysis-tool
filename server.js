// Import express module to create a server.
const express = require("express");

// Use express instance as a variable
const app = express();
const port = 5000;

// Use static for public directory
// And the server will find /public/index.html basically
app.use(express.static(__dirname + "/public"));

// render /public/index.html
app.get("/", (req, res) => {
    res.render("index.html");
})

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
})


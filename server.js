// Import express module to create a server.
const express = require("express");

// Import Router
const indexRouter = require("./routes/index");

// Use express instance as a variable
const app = express();
const port = 4000;

// Use ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); // static resources

// Routes index page by using indexRouter Instance
app.use("/", indexRouter);

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
})


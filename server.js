//Dependencies
const express = require('express');
const path = require("path");

//Express Server Configuration
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connection to routes files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`) });
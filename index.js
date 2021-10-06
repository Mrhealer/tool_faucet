const express = require('express');
const cors = require("cors");
const routers = require("./routes");
const port = 3001;
const app = express();
require('dotenv').config();

global.__basedir = __dirname;

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
app.use(cors());
// Add headers

routers(app);
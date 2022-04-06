const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 9000;
const feFolder = `${__dirname}/../frontend`
const frontEndPath = path.join(`${__dirname}/../frontend`)


app.use(express.json())

app.get("/", (req, res, next) => {
    res.sendFile(`${frontEndPath}/index.html`)
})

app.get("/image-list", (req, res) => {
    res.sendFile(`${frontEndPath}/data.json`)
})

app.use("/pub", express.static(`${feFolder}/public`));
app.use("/dist", express.static(`${feFolder}/dist`));

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
})
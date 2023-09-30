import express from "express";
import * as session from "express-session";
import {fileURLToPath} from "url";
import {dirname, sep} from "path";
import fs from "fs";
import logging from "./helper/something.js";
import mariadb from "mariadb";


const __dirname = dirname(fileURLToPath(import.meta.url)) + sep;



const cfg = {
    port:3001,
    dir: {
        public:__dirname + "public" + sep,
        data:__dirname + "data" + sep,
    }
}

const data = fs.readFileSync("./data/test.json");
const readable = JSON.parse(data);
const app = express();


app.set("view engine", "ejs");


app.use((req, res, next) => {
    console.log(cfg.dir);
    console.log(req.url);
    next();
});
app.use(express.static(cfg.dir.public));


app.get("/home", (req, res) => {
    res.render(
        "home",
        {}
    )
})
app.get("/add", (req, res) => {
    res.render(
        "add",
        {}
    )
})
app.get("/modify", (req, res) => {
    res.render(
        "modify",
        {}
    )
})

app.listen(cfg.port, () => {
    console.log(cfg.dir);
    logging();
    //console.log(readable);
});
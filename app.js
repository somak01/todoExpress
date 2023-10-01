import express from "express";
import * as session from "express-session";
import {fileURLToPath} from "url";
import {dirname, sep} from "path";
import fs from "fs";
import mariadb from "mariadb";
import mongoose from "mongoose";


//**************************************\\
import {addRouter} from "./routes/add.js";
import {modifyRouter} from "./routes/modify.js";
import {homeRouter} from "./routes/home.js";
import logging from "./middleware/logging.js";
//**************************************\\


const __dirname = dirname(fileURLToPath(import.meta.url)) + sep;

const uri = "mongodb://localhost:27017/todo";

async function connect() {
    try{
        await mongoose.connect(uri);
        console.log("Connected to mongodb");
        //console.log(mongoose.connection[0]);
        //const todo = mongoose.model("todo", todoSchema);

        // const jog = new todo({
        //     priority: 5,
        //     activity:"Jog",
        //     date: new Date(),
        //     location:"Amberhall",
        // })
        // jog.save();
        // const todos = await todo.find();
        // console.log(todos);
        // todo.deleteMany({priority:{$eq:5}}).then(() => {
        //     console.log("Data deleted");
        // }).catch((error) => {
        //     console.error(error);
        // });
    } catch (error) {
        console.error(error);
    }
}

connect();

const cfg = {
    port:3001,
    dir: {
        public:__dirname + "public" + sep,
        data:__dirname + "data" + sep,
    }
}
const app = express();


app.set("view engine", "ejs");


app.use(logging);
app.use(express.static(cfg.dir.public));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/home/",homeRouter);
app.use("/add/", addRouter);
app.use("/modify/", modifyRouter);

app.listen(cfg.port, () => {
    console.log(cfg.dir);
    //logging();
    //console.log(readable);
});
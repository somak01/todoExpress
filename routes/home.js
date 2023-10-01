import {Router} from "express";
import {Todo} from "../models/Todo.js";

export const homeRouter = Router();

homeRouter.get("/", async (req, res, next) => {
    const {priority, date, activity, location} = req.query;
    const query = {};
    if (priority) {
        query.priority = priority;
    }
    if (date) {
        query.date = date;
    }
    if (activity) {
        query.activity = activity;
    }
    if (location) {
        query.location = location;
    }

    console.log(query);
    const todos = await Todo.find(query).sort({priority:"desc"});
    return res.render("home", {todo:todos});
});




import {Router} from "express";
import {Todo} from "../models/Todo.js";

export const addRouter = Router();




addRouter.get("/", (req, res, next) => {
    console.log("Something in the way?");
    return res.render("add", {});
})

addRouter.post("/todo",(req, res, next) =>  {
    console.log(req.body);
    const {priority, date, activity, location } = req.body;
    const newTodo = new Todo({
        priority:priority,
        date:date,
        activity:activity,
        location:location
    });

    newTodo.save()
        .then(() => {
            res.redirect("/add");
        })
        .catch(() => {
            console.log(error);
        })
    
});
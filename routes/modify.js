import {Router} from "express";
import {Todo} from "../models/Todo.js";

export const modifyRouter = Router();




modifyRouter.delete("/delete/:id", async (req, res, next) => {
    Todo.findByIdAndDelete(req.params.id).then(() =>  {
        console.log("Deleted successfully!");
        res.status(200).send();
    }).catch((error) => {
        console.error(error);
    });
    
})

modifyRouter.get("/", async (req, res, next) => {
    const todos = await Todo.find();
    return res.render("modify", {todo:todos});
});

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


modifyRouter.get("/:id", async (req, res, next) => {
    //console.log(req.query);
    const instance = await Todo.findById(req.query.id);
    res.json(instance);
})


modifyRouter.put("/update/:id/", async (req, res, next) => {
    //const instance = await Todo.findById(req.query.id);
    console.log(req.body);
    const {priority, date, activity, location} = req.body;
    //console.log(instance);
    const filter = {_id:req.params.id};
    const replacement = {
        priority:priority,
        date:date,
        activity:activity,
        location:location
    };
    const inst = await Todo.find(filter);
    console.log(inst);
    const result = await Todo.updateOne(filter, replacement);
    //Todo.save();
    console.log(result);
    if (result.nModified === 1) {
        console.log("Yess!");
    }
    //result.save();


    res.status(200).send();
    // instance.priority = 
    // instance.date = 
})
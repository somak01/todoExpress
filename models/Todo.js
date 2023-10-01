import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    priority: Number,
    activity: {type:String,required:true},
    date: Date,
    location: {type:String,required:true},
});


export const Todo =  mongoose.model("Todo", TodoSchema);
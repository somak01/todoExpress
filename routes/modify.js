import {Router} from "express";


export const modifyRouter = Router();

modifyRouter.get("/",(req, res, next) => {
    return res.render("modify", {});
});
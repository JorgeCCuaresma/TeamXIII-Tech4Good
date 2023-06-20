import { Request, Response, NextFunction } from "express";


export const requiredFields =(req:Request, res:Response, next:NextFunction) =>{
const { name, email, password, surName, neighborhood } = req.body;

    if(!name){
        return res.status(400).json({
            msg: "Name is required"
        });
    }
    if(!email){
        return res.status(400).json({
            msg: "Email is required"
        });
    }
    if(!password){
        return res.status(400).json({
            msg: "Password is required"
        });
    }
    if(!surName){
        return res.status(400).json({
            msg: "SurName is required"
        });
    }
    if(!neighborhood){
        return res.status(400).json({
            msg: "Neighborhood is required"
        });
    }
    next();
}


   

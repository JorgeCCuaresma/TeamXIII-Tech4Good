import { Request, Response } from "express";
import { User } from "../../models/User";
import {checkPassword, generateJWT } from "../../helpers/index";

export const userLogin = async (req: Request, res: Response) => {

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                msg: "Email not valid"
            });
        }
        
        if (!user.active) {
            return res.status(400).json({
                msg: "User is not active"
            });
        }

        const validPassword = await checkPassword(password, user.password);
        if (!validPassword) {
            return res.status(401).json({
                msg: "Password not valid"
            });
        }

        const token = await generateJWT(user.id);

        res.status(200).json({
            token
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Server problem when login in",
            error
        });
    }
};
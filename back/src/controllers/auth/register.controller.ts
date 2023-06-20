import { Request, Response } from "express";

import { User } from "../../models/User";
import { encryptPassword, generateJWT, validEmail } from "../../helpers/index";


export const userRegistration = async (req: Request, res: Response) => {

    try {
        const { name, email, password, surName, neighborhood } = req.body;

        const emailIsValid = validEmail(email);
        if (!emailIsValid) {
            return res.status(401).json({
                msg: "Invalid Email"
            });
        }

        const savedUser = await User.findOne({ email });
        if (savedUser) {
            return res.status(401).json({
                msg: "Email is already registered"
            });
        }

        const user = new User({ name, email, password, surName, neighborhood });

        user.password = encryptPassword(password);
        await user.save();

        const token = await generateJWT(user.id);

        res.status(200).json({
            msg: "User correctly registered",
            token
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: "Server error when registering new user",
            error
        });
    }
};
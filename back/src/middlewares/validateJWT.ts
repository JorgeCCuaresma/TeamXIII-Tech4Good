import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
    const token: any = req.header("Authorization");
    if (!token) {
        return res.status(401).json({
            msg: "No token"
        });
    }
    try {

        const { uid } = jwt.verify(token, process.env.JWT as string) as JwtPayload;

        const user = await User.findById(uid);

        if (!user) {
            return res.status(401).json({
                msg: "User not found with the token provided",
            });
        }

        (req as any).user = user;

        next();

    } catch (error) {
        return res.status(400).json({
            msg: "Access denied, token expired or incorrect.",
            error
        });
    }
};
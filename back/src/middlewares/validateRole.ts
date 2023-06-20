import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = (req as any).user;

        if (user?.role !== "ADMIN_ROLE") {
            return res.status(401).json({
                msg: "Acces restricted"
            });
        }
        next();

    } catch (error) {
        return res.status(500).json({
            msg: "Server error when authenticating role",
            error
        });
    }
};
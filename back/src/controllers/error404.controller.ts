import { Request, Response } from "express";

const error404 = (req: Request, res: Response) => {
    try {
        return res.status(404).json({
            msg: "Error 404 - Page not found"
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Error 500 - Internal Server Error"
        });
    }
};

export default error404;
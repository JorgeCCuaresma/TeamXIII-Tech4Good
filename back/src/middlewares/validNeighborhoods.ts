import { Request, Response, NextFunction } from "express";
import barriosBarcelona from "../interfaces/Neighborhood";
export const validNeighborhoods = (req: Request, res: Response, next: NextFunction) => {
    const { neighborhood } = req.body;
    const isArray = Array.isArray(neighborhood);
    const isIncluded = barriosBarcelona.includes(neighborhood);
    if (isArray) {
        const isTrue = neighborhood.every(elemento => barriosBarcelona.includes(elemento));
        if (isTrue) {
            return next()
        }
        if (!isTrue) {
            return res.status(400).json({
                msg: "Invalid neighborhood"
            })
        }
    }
    if (!isIncluded) {
        return res.status(400).json({
            msg: "Invalid neighborhood"
        })
    }
    next();
}
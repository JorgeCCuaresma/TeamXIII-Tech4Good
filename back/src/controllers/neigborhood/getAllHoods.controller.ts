import { Request, Response } from "express";
import { Neighborhood } from "../../models/Neighborhood"

export const getAllHoods = async (req: Request, res: Response) => {

    try {
        const hoods = await Neighborhood.find({});
        res.status(200).json({
            hoods
        });

    } catch (error) {
        return res.status(500).json({
            msg: "Server problem when showing stats",
            error
        });
    }
}
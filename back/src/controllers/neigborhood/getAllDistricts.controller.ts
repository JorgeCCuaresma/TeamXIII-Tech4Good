import { Request, Response } from "express";
import { Neighborhood } from "../../models/Neighborhood";

export const getAllDistricts = async (req: Request, res: Response) => {
  try {
    const districts = await Neighborhood.find();
    return res.status(200).json(districts);

  } catch (error) {
    return res.status(500).json({
      msg: "Server problem when showing stats",
      error,
    });
  }
};

import { Request, Response } from "express";
import { Neighborhood } from "../../models/Neighborhood";
import { INeighborhood } from "../../interfaces/INeighborhood";

export const getAllDistricts = async (req: Request, res: Response) => {
  try {
    const districts: string[] = await Neighborhood.distinct("district");

    const districtData: Record<string, INeighborhood[]> = {};
    for (const district of districts) {
      const data: INeighborhood[] = await Neighborhood.find({ district });
      districtData[district] = data;
    }

    res.status(200).json({
      districts: districtData,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server problem when showing stats",
      error,
    });
  }
};

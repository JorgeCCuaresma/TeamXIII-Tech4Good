import { Schema, model } from "mongoose";
import { INeighborhood } from "../interfaces/INeighborhood";

const NeighborhoodSchema = new Schema<INeighborhood>({
  districtCode: {
    type: Number,
    required: true,
  },
  districtName: {
    type: String,
    required: true,
  },
  neighborhoodCode: {
    type: Number,
    required: true,
  },
  neighborhoodName: {
    type: String,
    required: true,
  },
  incomeAvg: {
    type: Number,
  },
  incomeScore: {
    type: Number,
  },
  centerScore: {
    type: Number,
  },
  digitalScore: {
    type: Number,
  },
  mobilityScore: {
    type: Number,
  },
  totalScore: {
    type: Number,
  },
});

export const Neighborhood = model<INeighborhood>(
  "Neighborhood",
  NeighborhoodSchema
);

import { Schema, model } from "mongoose";
import { INeighborhood } from "../interfaces/INeighborhood";

const NeighborhoodSchema = new Schema<INeighborhood>({
    name: {
        type: String,
        required: true,
    },
    income: {
        type: Number,
        required: true,
    },
    district: {
        type: String,
    }
});

export const Neighborhood = model<INeighborhood>("Neighborhood", NeighborhoodSchema);
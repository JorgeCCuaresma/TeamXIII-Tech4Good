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
        required: true,
    },
    incomeScore: {
        type: Number,
        required: true,
    },
    centerScore: {
        type: Number,
        required: true,
    },
    digitalScore: {
        type: Number,
        required: true,
    },
    mobilityScore: {
        type: Number,
        required: true,
    },
    totalScore: {
        type: Number,
        required: true,
    }
});

export const Neighborhood = model<INeighborhood>("Neighborhood", NeighborhoodSchema);
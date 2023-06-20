import { Neighborhood } from "../models/Neighborhood";
import { User } from "../models/User";

import data from "./data";
import {formattedData} from "../data/neighborhood";

const seeder = async () => {
    if (process.env.ENVIRONMENT === "dev") {
        try {
            await User.deleteMany({});
            await Neighborhood.deleteMany({});
            console.log("DB has been reseted");

            await User.insertMany(data);
            await Neighborhood.insertMany(formattedData);
            console.log("DB has been seeded");
        } catch (error) {
            console.log(error);
        }
    }
};

export default seeder;
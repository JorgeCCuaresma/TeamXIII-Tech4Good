import { Neighborhood } from "../models/Neighborhood";
import { User } from "../models/User";

import {userData} from "./userData.mock";
import {hoodData} from "../data/hoodData";

const seeder = async () => {
    if (process.env.ENVIRONMENT === "dev") {
        try {
            await User.deleteMany({});
            await Neighborhood.deleteMany({});
            console.log("DB has been reseted");

            await User.insertMany(userData);
            await Neighborhood.insertMany(hoodData);
            console.log("DB has been seeded");
        } catch (error) {
            console.log(error);
        }
    }
};

export default seeder;
import { User } from "../models/User";
import data from "./data";

const seeder = async () => {
    if (process.env.ENVIRONMENT === "dev") {
        try {
            await User.deleteMany({});
            console.log("DB has been reseted");

            await User.insertMany(data);
            console.log("DB has been seeded");
        } catch (error) {
            console.log(error);
        }
    }
};

export default seeder;
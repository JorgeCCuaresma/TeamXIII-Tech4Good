
import {encryptPassword} from "../helpers/index";

const password = encryptPassword("123456");

export const userData = [
    {
        name: "seed1",
        surName:"test1",
        email: "seed1@test.com",
        password,
        role: "ADMIN_ROLE"
    },
    {
        name: "seed2",
        surName:"test1",
        email: "seed2@test.com",
        password
    },
    {
        name: "seed3",
        surName:"test1",
        email: "seed3@test.com",
        password
    },
];
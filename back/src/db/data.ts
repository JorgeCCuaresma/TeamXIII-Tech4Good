
import {encryptPassword} from "../helpers/index";

const password = encryptPassword("123456");

const data = [
    {
        name: "seed1",
        email: "seed1@test.com",
        password,
        role: "ADMIN_ROLE"
    },
    {
        name: "seed2",
        email: "seed2@test.com",
        password
    },
    {
        name: "seed3",
        email: "seed3@test.com",
        password
    },

];

export default data;
import bcryptjs from "bcryptjs";

export const encryptPassword = (pass: string) => {

    const salt = bcryptjs.genSaltSync(10);
    const password = bcryptjs.hashSync(pass, salt);

    return password;

};
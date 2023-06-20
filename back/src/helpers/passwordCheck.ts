import bcryptjs from "bcryptjs";

export const checkPassword = (pass: string, passInDB: string) => {

    const password = bcryptjs.compareSync(pass, passInDB);

    return password;

};

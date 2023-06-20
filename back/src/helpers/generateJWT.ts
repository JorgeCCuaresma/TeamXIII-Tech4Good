import jwt from "jsonwebtoken";

export const generateJWT = (uid = "") => {

    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.JWT as string, {
            expiresIn: "4h"
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("Token could not be created");
            } else {
                resolve(token);
            }
        });
    });
    
};
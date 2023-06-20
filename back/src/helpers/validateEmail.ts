import validator from "email-validator";

export const validEmail = (email: string) => {

    const isValidEmail = validator.validate(email);
    
    return isValidEmail;

};
import { Request, Response } from "express";
import { User } from "../../models/User";
import { encryptPassword } from "../../helpers";

export const updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
        return res.status(404).json({
            msg: "User not found"
        });
    }
    const { name, password, surName, neighborhood } = req.body;

    const body = {
        name,
        password,
        surName,
        neighborhood,
    }
  if (body.password) body.password = encryptPassword(password);

    const userModified = await User.findByIdAndUpdate(id, body);
    if (userModified) {
        const userToSend = await User.findById(id)
        return res.status(200).json({
            user: userToSend
        })
    };

}
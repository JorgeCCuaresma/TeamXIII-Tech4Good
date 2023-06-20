import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/IUser";
import barriosBarcelona from "../utils/Neighborhood";
;

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    surName: {
        type: String,
        required: [true, "SurName is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    neighborhood: [{
        type: String,
        required: [true, "Neighborhood is required"],
        validate: {
          validator: function (value: string) {
            return barriosBarcelona.includes(value);
          },
          message: 'Invalid neighborhood'
        }
      }],
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: "USER_ROLE",
        emun:["ADMIN_ROLE", "USER_ROLE"]
    },
    active: {
        type: Boolean,
        default: true
    }
});

UserSchema.methods.toJSON = function () {
    //desestructuramos para que no haya info extra en la base de datos
    //solo retorno lo que "queda" en user
    const { __v, password, _id, ...user } = this.toObject();

    //_id va aparecer como uid, esto es estetico pero usaremos uid en nuestros controladores
    user.uid = _id;
    return user;
};

export const User = model<IUser>("User", UserSchema);
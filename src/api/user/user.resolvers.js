import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validateUser } from "./user.validation";
import { UserService } from "./user.service";
const User = new UserService();

import dotenv from "dotenv";
dotenv.load();

const APP_SECRET = process.env.APP_SECRET;

const signup = async (_, { input }) => {

    //validate the user email and password
    const { value, error } = validateUser(input);
    if (error) {
        throw new Error(error.message);
    }
    const password = await bcrypt.hash(value.password, 10);
    const user = await User.add({
        email: value.email,
        password
    });
    const token = jwt.sign({ userId: user._id }, APP_SECRET);
    return {
        token,
        user: {
            _id: user._id,
            email: user.email
        }
    };
};

const login = async (_, { input }, ctx, info) => {
    const { value, error } = validateUser(input);
    if (error) {
        throw new Error(error.message);
    }
    const user = await User.findOne({ email: value.email });
    if (!user) {
        throw new Error('No such a user');
    }
    const matched = await bcrypt.compare(value.password, user.password);
    if (!matched) {
        throw new Error('invalid password');
    }
    const token = jwt.sign({ userId: user._id }, APP_SECRET);
    return {
        token,
        user: {
            _id: user._id,
            email: user.email
        }
    };
}

export default {
    Mutation: {
        signup,
        login
    },
};

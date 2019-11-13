import express from 'express'
import jwt from 'jsonwebtoken'
import users from "../models/user"
import hashPassword from '../heplpers/hash'
import comparePassword from '../heplpers/compareHash'


const app = express();

app.set(process.env.secret, "super-secret-secret");
export default class AuthanticationController {
    /**
     * @description This helps a new Employee to create credentials
     * @param  {object} req - The request object
     * @param  {object} res - The response object
     */
    static async register(req, res) {
        try {
            const value = await req.value;
            const User = users.find(user => user.email === value.email);
            if (User)
                throw res.status(401).json({
                    message: "Email provided already exist"
                });
            const hashedPassword = await hashPassword(value.password)
            value.password = await hashPassword(value.password)
            users.push({ ...value });
            const token = jwt.sign(value, app.get(process.env.secret));
            res.status(201).send({
                status: 201,
                message: "User created successfully",
                data: {token: token}
            });


        } catch (error) {
            res.status(400).send({
                message: `error: ${error}`
            });
        }
    }
    /**
   * @description This checks if it is a registered Employee and returns a token as a response
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   */
    static async login(req, res) {
        try {
            const value = req.value;
            const User = users.find(user => user.email === value.email);
            if (!User) {
                throw res.status(401).json({
                    message: 'email or password do not match'
                });
            }
            const isUser = await comparePassword({ value, User })

            if (isUser) {
                const token = jwt.sign(User, app.get(process.env.secret));
                res.status(200).json({
                    status: 200,
                    message: 'User is successfully logged in',
                    data: {token:token}
                })
            } else {
                res.status(401).json({ status: 401, error: 'email or password do not match' });
            }

        } catch (error) {
            res.status(403).send({
                status: 'error',
                error: `invalid email or password:   ${error}`
            });
        }
    }

};

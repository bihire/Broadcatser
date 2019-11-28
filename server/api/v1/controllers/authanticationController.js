import express from 'express'
import jwt from 'jsonwebtoken'
import users from "../models/user"
import hashPassword from '../heplpers/hash'
import comparePassword from '../heplpers/compareHash'
import dotenv from 'dotenv'
dotenv.config()


const app = express();

// app.set('secretKey', process.env.SECRET);
export default class AuthanticationController {
    /**
     * @description This helps a new User to create credentials
     * @param  {object} req - The request object
     * @param  {object} res - The response object
     */
    static async register(req, res) {
            const value = await req.value;
            const User = users.find(user => user.email === value.email);
            if (User)
                return res.status(401).json({
                    status: 401,
                    message: "Email provided already exist"
                });
            value.password = await hashPassword(value.password)
            users.push({ ...value });
            const token = jwt.sign(value, process.env.SECRET);
            res.status(201).send({
                status: 201,
                message: "User created successfully",
                data: {token: token}
            });

    }
    /**
   * @description This checks if it is a registered User and returns a token as a response
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   */
    static async login(req, res) {
        
            const value = req.value;
            const User = users.find(user => user.email === value.email);
            if (!User) {
                return res.status(401).json({
                    status: 401,
                    message: 'invalid email or password'
                });
            }
            const isUser = await comparePassword({ value, User })

            if (isUser) {
                const token = jwt.sign(User, process.env.SECRET)
                res.status(200).json({
                    status: 200,
                    message: 'User is successfully logged in',
                    data: {token:token}
                })
            } else {
                res.status(401).json({ status: 401, error: 'invalid email or password' });
            }
    }

};

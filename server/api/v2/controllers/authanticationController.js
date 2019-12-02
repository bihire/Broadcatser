import jwt from 'jsonwebtoken'
import { Pool } from 'pg'
import users from "../models/user"
import hashPassword from '../heplpers/hash'
import comparePassword from '../heplpers/compareHash'
import dotenv from 'dotenv'
dotenv.config()


const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

export default class AuthanticationController {
    /**
     * @description This helps a new User to create credentials
     * @param  {object} req - The request object
     * @param  {object} res - The response object
     */
    static async register(req, res) {
        try{
            const value = await req.value;
            value.password = await hashPassword(value.password)
            const text = ('INSERT INTO users(email, first_name, last_name,password, phone_number,is_admin) VALUES($1, $2, $3, $4, $5, $6) RETURNING *')
            const values = [value.email, value.first_name, value.last_name, value.password, value.phone_number, value.is_admin]

            const { rows } = await pool.query(text, values);
           
            const newValue = {
                id: rows[0].id,
                isAdmin: rows[0].is_admin
            }
            const token = jwt.sign(newValue, process.env.SECRET);
            res.status(201).send({
                status: 201,
                message: "User created successfully",
                data: { token: token }
            });
        } catch (error){
            if (error && error.routine === '_bt_check_unique') return res.status(403).json({
                status: 403,
                error: 'Email provided already exist'
            })
        }
        

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
                return res.status(403).json({
                    status: 403,
                    message: 'invalid email or password'
                });
            }
            const isUser = await comparePassword({ value, User })

            if (isUser) {
                const newValue = {
                    id: User.id,
                    isAdmin: User.is_admin
                }
                const token = jwt.sign(newValue, process.env.SECRET)
                res.status(200).json({
                    status: 200,
                    message: 'User is successfully logged in',
                    data: {token:token}
                })
            } else {
                res.status(403).json({ status: 403, error: 'invalid email or password' });
            }
    }

};

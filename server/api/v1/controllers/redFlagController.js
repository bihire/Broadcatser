import redFlag from "../models/red-flag"
import responseMsg from '../heplpers/responseMsg'
import fs from 'fs'



export default class RedFlagController {
    static async create (req, res) {
       const value = req.value
       redFlag.push({...value})
        value.images.forEach(obj => fs.unlinkSync(obj))
        value.videos.forEach(obj => fs.unlinkSync(obj))

        res.status(201).json({
            status: 201,
            data: [{
                id: value.id,
                message: 'Created red- flag record'
            }]
            
        })
    }
    static async trying (req, res, next) {
        
}
}
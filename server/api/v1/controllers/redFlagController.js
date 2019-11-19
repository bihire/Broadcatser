import redFlag from "../models/red-flag"
import responseMsg from '../heplpers/responseMsg'
import fs from 'fs'
import findById from "../heplpers/findById";
import redFlags from '../models/red-flag'




export default class RedFlagController {
    /**
    * @description This helps the authorized User to create a new red-flag/intervention
    * @param  {object} req - The request object
    * @param  {object} res - The response object
    */
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
    /**
    * @description This helps the authorized User to update an existing red-flag/intervention location
    * @param  {object} req - The request object
    * @param  {object} res - The response object
    */
    static async updateLocation (req, res) {
        const value = req.value
        let update = findById(redFlags, value.red_flag_id)
        if (!update) throw responseMsg.errorMsg(res, 404, 'red-flag-id not found')
        if (res.token.id != update.created_by) throw responseMsg.errorMsg(res, 403, 'you have rights over this endpoint')

        update.location = value.location ? value.location : update.location
        res.status(200).json({
            status: 200,
            data: [{
                id: update.id,
                message: 'Updated red-flag record’s location'
            }]
        })
}
}
import redFlag from "../models/red-flag"
import responseMsg from '../heplpers/responseMsg'
import fs from 'fs'
import findById from "../heplpers/findById";
import redFlags from '../models/red-flag'
import checkInt from '../heplpers/checkInt'


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
        if (res.token.id != update.created_by && update.status !== 'draft' ) throw responseMsg.errorMsg(res, 403, 'you have rights over this endpoint')

        update.location = value.location ? value.location : update.location
        res.status(200).json({
            status: 200,
            data: [{
                id: update.id,
                message: 'Updated red-flag record’s location'
            }]
        })
    }
    /**
    * @description This helps the authorized User to update an existing red-flag/intervention comment
    * @param  {object} req - The request object
    * @param  {object} res - The response object
    */
   static async updateComment(req, res) {
       const value = req.value
       let update = findById(redFlags, value.red_flag_id)
       if (!update) throw responseMsg.errorMsg(res, 404, 'red-flag-id not found')
       if (res.token.id != update.created_by && update.status !== 'draft') throw responseMsg.errorMsg(res, 403, 'you have rights over this endpoint')

       update.comment = value.comment ? value.comment : update.comment
       res.status(200).json({
           status: 200,
           data: [{
               id: update.id,
               message: 'Updated red-flag record’s comment'
           }]
       })
   }
/**
* @description This helps the authorized User to fetch a specific red-flag/intervention
* @param  {object} req - The request object
* @param  {object} res - The response object
*/
static async getOne(req, res) {
    const { red_flag_id } = req.params
    if (!checkInt(red_flag_id)) {
        responseMsg.errorMsg(res, 403, 'red-flag-id must be an integer and less than 8 in length')
    }
    let item = findById(redFlags, red_flag_id)
    if (!item) throw responseMsg.errorMsg(res, 404, 'red-flag-id not found')
    res.status(200).json({
        status: 200,
        data: item
    })
}
}
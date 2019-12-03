import redFlag from "../models/red-flag"
import { Pool } from 'pg'
import responseMsg from '../heplpers/responseMsg'
import findById from "../heplpers/findById";
import redFlags from '../models/red-flag'
import checkInt from '../heplpers/checkInt'

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
export default class RedFlagController {
    /**
    * @description This helps the authorized User to create a new red-flag/intervention
    * @param  {object} req - The request object
    * @param  {object} res - The response object
    */
    static async create (req, res) {
        const value = req.value
        const text = ('INSERT INTO flags(title, type, comment, status, location,labels, images, videos,created_by, created_on) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *')
        const values = [value.title, value.type, value.comment, value.status, value.location, value.labels, value.images, value.videos, value.created_by, value.created_on]

        const { rows } = await pool.query(text, values);

        res.status(201).json({
            status: 201,
            data: [{
                id: rows[0].id,
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
        const updateOne = `UPDATE flags SET location=($2) where id=($1) returning *`;
        const fetch_text = 'SELECT * FROM flags WHERE id = $1'

        const { rows } = await pool.query(fetch_text, [value.red_flag_id])
        if (!rows[0]) {
            return res.status(404).json({
                status: 404,
                message: 'red-flag-id not found'
            });
        }

        if (res.token.id != rows[0].created_by || rows[0].status !== 'draft' ) return responseMsg.errorMsg(res, 403, 'you have no rights over this endpoint')
        const response = await pool.query(updateOne, [value.red_flag_id, value.location]);
        res.status(200).json({
            status: 200,
            data: [{
                id: response.rows[0].id,
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
       const updateOne = `UPDATE flags SET comment=($2) where id=($1) returning *`;
       const fetch_text = 'SELECT * FROM flags WHERE id = $1'

       const { rows } = await pool.query(fetch_text, [value.red_flag_id])
       if (!rows[0]) {
           return res.status(404).json({
               status: 404,
               message: 'red-flag-id not found'
           });
       }

       if (res.token.id != rows[0].created_by || rows[0].status !== 'draft') return responseMsg.errorMsg(res, 403, 'you have no rights over this endpoint')
       const response = await pool.query(updateOne, [value.red_flag_id, value.comment]);
       res.status(200).json({
           status: 200,
           data: [{
               id: response.rows[0].id,
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
    const fetch_text = 'SELECT * FROM flags WHERE id = $1'

    const { rows } = await pool.query(fetch_text, [red_flag_id])
    if (!rows[0]) {
        return res.status(404).json({
            status: 404,
            message: 'red-flag-id not found'
        });
    }
    const newItem = {
        id: rows[0].id,
        createdBy: rows[0].created_by,
        title: rows[0].title,
        type: rows[0].type,
        comment: rows[0].comment,
        status: rows[0].status,
        location: rows[0].location,
        labels: rows[0].labels,
        images: rows[0].images,
        videos: rows[0].videos,
        createdOn: rows[0].created_on
    }
    res.status(200).json({
        status: 200,
        data: newItem
    })
}
    /**
    * @description This helps the authorized User to fetch all red-flag/intervention
    * @param  {object} req - The request object
    * @param  {object} res - The response object
    */
    static async getAll(req, res) {
        const data = []
        await redFlags.forEach(item => {
            const newItem = {
                id: item.id,
                createdBy: item.created_by,
                title: item.title,
                type: item.type,
                comment: item.comment,
                status: item.status,
                location: item.location,
                labels: item.labels,
                images: item.images,
                videos: item.videos,
                createdOn: item.created_on
            }
            data.push({...newItem})
        })
        
        res.status(200).json({
            status: 200,
            data: data
        })
    }
    /**
    * @description This helps the authorized User to delete their red-flag/intervention
    * @param  {object} req - The request object
    * @param  {object} res - The response object
    */
    static async delete(req, res) {
        const { red_flag_id } = req.params

        let item = findById(redFlags, red_flag_id)
        if (!item) return responseMsg.errorMsg(res, 404, 'red-flag-id not found')
        if (item.created_by !== res.token.id || item.status !== 'draft') return responseMsg.errorMsg(res, 403, 'you have rights over this endpoint')
        const validId = redFlags.findIndex(redFlag => redFlag.id == red_flag_id)
        redFlags.splice(validId, 1)

        res.status(200).json({
            status: 200,
            data: {
                id: item.id,
                message: 'red-flag record has been deleted'
            }
        })
    }
}
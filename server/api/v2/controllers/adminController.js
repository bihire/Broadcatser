import { Pool } from 'pg'
import responseMsg from '../heplpers/responseMsg'
import checkInt from '../heplpers/checkInt'

const pool = new Pool({
    connectionString: process.env.HEROKU_POSTGRESQL_JADE_URL
});
export default class adminController {
    /**
   * @description This helps the authorized User to update an existing red-flag/intervention location
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   */
    static async updateStatus(req, res) {
        const value = req.value
        const updateOne = `UPDATE flags SET status=($2) where id=($1) returning *`
        const fetch_text = 'SELECT * FROM flags WHERE id = $1'

        const { rows } = await pool.query(fetch_text, [value.red_flag_id])
        if (!rows[0]) {
            return res.status(404).json({
                status: 404,
                message: 'red-flag-id not found'
            });
        }
        const response = await pool.query(updateOne, [value.red_flag_id, value.status]);
        res.status(200).json({
            status: 200,
            data: [{
                id: response.rows[0].id,
                message: 'Updated red-flag record’s status'
            }]
        })
    }
}
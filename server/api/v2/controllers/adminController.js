import { Pool } from "pg";
import responseMsg from "../heplpers/responseMsg";
import nodemailer from "nodemailer";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
export default class adminController {
  /**
   * @description This helps the authorized User to update an existing red-flag/intervention location
   * @param  {object} req - The request object
   * @param  {object} res - The response object
   */
  static async updateStatus(req, res) {
    const value = req.value;
    const updateOne = `UPDATE flags SET status=($2) where id=($1) returning *`;
    const fetch_text = "SELECT * FROM flags WHERE id = $1";
    const fetch_user = "SELECT * FROM users WHERE id = $1";

    const { rows } = await pool.query(fetch_text, [value.red_flag_id]);
    if (!rows[0]) {
      return res.status(404).json({
        status: 404,
        message: "red-flag-id not found"
      });
    }
    const response = await pool.query(updateOne, [
      value.red_flag_id,
      value.status
    ]);
    const user = await pool.query(fetch_user, [response.rows[0].created_by]);
    if (user.rows[0] === undefined)
      return responseMsg.errorMsg(res, 400, "user does not exist");

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bihireb1@gmail.com",
        pass: "bobo12345"
      }
    });
    const mailOptio = {
      from: "bihireb1@gmail.com",
      to: `${user.rows[0].email}`,
      subject: "Status update",
      text: `This is to inform you that the status of your ${response.rows[0].type} about "${response.rows[0].title}" was updated  to ${response.rows[0].status}`
    };
    await transport.sendMail(mailOptio, (err, json) => {
      if (err)
        return responseMsg.errorMsg(
          res,
          400,
          "there was an error while sending the email to user"
        );
    });
    const newItem = {
      id: response.rows[0].id,
      createdBy: response.rows[0].created_by,
      title: response.rows[0].title,
      type: response.rows[0].type,
      comment: response.rows[0].comment,
      status: response.rows[0].status,
      location: response.rows[0].location,
      labels: response.rows[0].labels,
      images: response.rows[0].images,
      videos: response.rows[0].videos,
      createdOn: response.rows[0].created_on
    };
    res.status(200).json({
      status: 200,
      message: "Updated red-flag record’s status",
      data: newItem
    });
  }
}

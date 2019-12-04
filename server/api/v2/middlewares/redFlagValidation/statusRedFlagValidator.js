import joi from 'joi'
import responseMsg from '../../heplpers/responseMsg'
import checkInt from '../../heplpers/checkInt'

export default (req, res, next) => {
    const token = res.token
    const { status } = req.body
    const { red_flag_id } = req.params

    if (!token.isAdmin || token.isAdmin !== true) {
        responseMsg.errorMsg(res, 403, 'you have no rights over this endpoint')
    }
    if (!checkInt(red_flag_id)) {
        responseMsg.errorMsg(res, 400, 'red-flag-id must be an integer and less than 8 in length')
    }
    const newComment = {
        status,
        red_flag_id: Number(red_flag_id)
    }
    const schema = joi.object().keys({
        red_flag_id: joi
            .number()
            .integer()
            .required(),
        status: joi
            .string()
            .trim()
            .valid("under-investigation", "resolved", "rejected")
            .required(),
    });
    const { error, value } = joi.validate(newComment, schema);

    if (error) {

        responseMsg.errorMsg(res, 403, error.details[0].message)
    } else {
        req.value = value;
        next();
    }
}
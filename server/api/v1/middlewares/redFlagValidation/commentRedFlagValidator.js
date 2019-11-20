import joi from 'joi'
import responseMsg from '../../heplpers/responseMsg'
import checkInt from '../../heplpers/checkInt'

export default (req, res, next)=> {
    const token = res.token
    const { comment } = req.body
    const { red_flag_id } = req.params
    if (!checkInt(red_flag_id)) {
        responseMsg.errorMsg(res, 403, 'red-flag-id must be an integer and less than 8 in length')
    }
    const newComment = {
        comment,
        red_flag_id: Number(red_flag_id)
    }
    const schema = joi.object().keys({
        red_flag_id: joi
            .number()
            .integer()
            .required(),
        comment: joi
            .string()
            .trim()
            .regex(/^[a-z\d\-_\s!@#$%^&*()+=?<>.,;:'"]+$/i)
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
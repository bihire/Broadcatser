import users from "../../models/user"
import id_auto_inc from "../../heplpers/id_auto_inc"

import joi from "joi"
export default (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        confirmPassword,
        isAdmin
    } = req.body;
    const user = {
        id: id_auto_inc(users),
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        password,
        confirm_password: confirmPassword,
        is_admin: isAdmin
    };
    const schema = joi.object().keys({
        id: joi
            .number()
            .integer()
            .min(3)
            .required(),
        first_name: joi
            .string()
            .regex(/^[a-zA-Z0-9\s]{3,25}$/)
            .trim()
            .required(),
        last_name: joi
            .string()
            .trim()
            .regex(/^[a-zA-Z0-9\s]{3,25}$/)
            .required(),
        email: joi
            .string()
            .email()
            .trim()
            .required(),
        password: joi
            .string()
            .regex(new RegExp("^[a-zA-Z0-9]{8,32}$"))
            .required(),
        phone_number: joi
            .string()
            .trim()
            .regex(new RegExp("^[0-9]{10}$"))
            .required(),
        confirm_password: joi
            .string()
            .required()
            .valid(joi.ref("password")),
        is_admin: joi.boolean().default(false)
    });
    const { error, value } = joi.validate(user, schema);

    if (error) {
        switch (error.details[0].context.key) {
            case "password":
                res.status(400).send({
                    status: "error",
                    error: `password provided failed to match the following rules:
              <br>
              1. must contain the following charaters: lower case, upper case, integers
              <br>
              2. It must at least be 8 - 32 characters long
              `
                });
                break;

            case "email":
                res.status(400).send({
                    status: "error",
                    error: `you must provide a valid email`
                });
                break;

            case "first_name":
                res.status(400).send({
                    status: "error",
                    error: `the first name is compulsory and must contain between 3-25 alphabetic characters`
                });
                break;

            case "last_name":
                res.status(400).send({
                    status: "error",
                    error: `the last name(s) is(are) compulsory and must contain between 3-25 alphabetic characters`
                });
                break;

            case "confirm_password":
                res.status(400).send({
                    status: "error",
                    error: `please provide identical passwords`
                });
                break;

            case "phone_number":
                res.status(400).send({
                    status: "error",
                    error: `you must provide a valid phone number containing 10 numbers`
                });
                break;

            // default:
            //     res.status(400).send({
            //         status: "error",
            //         error: `invalid information`
            //     });
            //     break;
        }
    } else {
        delete value.confirm_password
        req.value = value;
        next();
    }
};

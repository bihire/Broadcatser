import joi from "joi"
export default (req, res, next) => {
    const { email, password } = req.body
    const user = { email, password }
    const schema = joi.object().keys({

        email: joi
            .string()
            .email()
            .trim()
            .required(),
        password: joi
            .string()

    });
    const { error, value } = joi.validate(user, schema);

    if (error) {
        switch (error.details[0].context.key) {


            case "email":
                res.status(400).send({
                    status: "error",
                    error: `you must provide a valid email`
                });
                break;

            default:
                res.status(400).send({
                    status: "error",
                    error: `invalid information`
                });
                break;
        }
    } else {
        req.value = value;
        next();
    }
};
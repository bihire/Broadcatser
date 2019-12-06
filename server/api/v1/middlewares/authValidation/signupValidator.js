import users from "../../models/user";
import id_auto_inc from "../../heplpers/id_auto_inc";
import responseMsg from "../../heplpers/responseMsg";

import joi from "joi";
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
    responseMsg.errorMsg(res, 400, error.details[0].message);
  } else {
    delete value.confirm_password;
    req.value = value;
    next();
  }
};

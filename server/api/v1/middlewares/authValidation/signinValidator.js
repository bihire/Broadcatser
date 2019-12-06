import joi from "joi";
import responseMsg from "../../heplpers/responseMsg";

export default (req, res, next) => {
  const { email, password } = req.body;
  const user = { email, password };
  const schema = joi.object().keys({
    email: joi
      .string()
      .email()
      .trim()
      .required(),
    password: joi.string()
  });
  const { error, value } = joi.validate(user, schema);

  if (error) {
    responseMsg.errorMsg(res, 400, error.details[0].message);
  } else {
    req.value = value;
    next();
  }
};

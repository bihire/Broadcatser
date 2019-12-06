import joi from "joi";
import responseMsg from "../../heplpers/responseMsg";
import checkInt from "../../heplpers/checkInt";

export default (req, res, next) => {
  const token = res.token;
  const { location } = req.body;
  const { red_flag_id } = req.params;
  if (!checkInt(red_flag_id)) {
    responseMsg.errorMsg(
      res,
      403,
      "red-flag-id must be an integer and less than 8 in length"
    );
  }
  if (location && typeof location === "string") {
    const latLong = location.split(",");
    if (latLong.length !== 2) {
      responseMsg.errorMsg(
        res,
        403,
        "add only latitute and longitude separated by a commun on location field"
      );
    }
    const findError = obj => obj === "" || isNaN(obj);
    if (typeof latLong.find(findError) === "string") {
      responseMsg.errorMsg(res, 403, "one field is empty or not a number");
    }
    const latitude = latLong[0];
    const longitude = latLong[1];

    const newLocation = {
      id: token.id,
      latitude,
      longitude
    };
    const schema = joi.object().keys({
      id: joi
        .number()
        .integer()
        .required(),
      longitude: joi
        .number()
        .min(-180)
        .max(+180)
        .required(),
      latitude: joi
        .number()
        .min(-90)
        .max(90)
        .required()
    });
    const { error, value } = joi.validate(newLocation, schema);

    if (error) {
      responseMsg.errorMsg(res, 403, error.details[0].message);
    } else {
      delete value.latitude;
      delete value.longitude;
      value.location = location;
      value.red_flag_id = red_flag_id;
      req.value = value;
      next();
    }
  }
};

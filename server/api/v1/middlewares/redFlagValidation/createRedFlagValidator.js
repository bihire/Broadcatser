import fs from "fs";

import redFlag from "../../models/red-flag";
import id_auto_inc from "../../heplpers/id_auto_inc";
import joi from "joi";

import responseMsg from "../../heplpers/responseMsg";

export default (req, res, next) => {
  try {
    const imageUrls = [];
    const videoUrls = [];
    const { location, labels } = req.body;
    if (
      location &&
      typeof location === "string" &&
      labels &&
      typeof labels === "string"
    ) {
      // labels
      const labelsItems = labels.split(",");
      const trimlabelsItems = [];
      labelsItems.forEach(obj =>
        trimlabelsItems.push(
          obj.replace(/(^\ *)|(\ *$)/g, "").replace(/ +/g, " ")
        )
      );
      const newLabels = trimlabelsItems.filter(obj => obj !== "");
      // longitude
      const latLong = location.split(",");
      if (latLong.length !== 2) {
        responseMsg.errorMsg(
          res,
          400,
          "add only latitute and longitude separated by a commun on location field"
        );
      }
      const findError = obj => obj === "" || isNaN(obj);
      if (typeof latLong.find(findError) === "string") {
        responseMsg.errorMsg(res, 400, "one field is empty or not a number");
      } else {
        const latitude = latLong[0];
        const longitude = latLong[1];
        const token = res.token;
        const { title, type, comment } = req.body;

        const artl = {
          id: id_auto_inc(redFlag),
          created_by: token.id,
          title,
          type,
          longitude,
          latitude,
          comment,
          created_on: new Date()
        };
        const schema = joi.object().keys({
          id: joi
            .number()
            .integer()
            .required(),
          created_by: joi
            .number()
            .integer()
            .required(),
          created_on: joi.date().required(),
          type: joi
            .string()
            .trim()
            .valid("red-flag", "intervention")
            .required(),
          title: joi
            .string()
            .trim()
            .regex(/^[a-z\d\-_\s!@#$%^&*()+=?<>.,;:'"]+$/i)
            .required(),
          comment: joi
            .string()
            .trim()
            .regex(/^[a-z\d\-_\s!@#$%^&*()+=?<>.,;:'"]+$/i)
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
            .required(),
          status: joi
            .string()
            .trim()
            .default("draft")
        });
        const { error, value } = joi.validate(artl, schema);

        if (error) {
          responseMsg.errorMsg(res, 400, error.details[0].message);
        } else {
          delete value.latitude;
          delete value.longitude;
          value.location = location;
          value.labels = newLabels;
          value.images = imageUrls;
          value.videos = videoUrls;
          req.value = value;
          next();
        }
      }
    } else {
      responseMsg.errorMsg(
        res,
        400,
        "location and labels are compulsory and must be type of string"
      );
    }
  } catch (error) {
    responseMsg.errorMsg(res, 500, "an error happened we are working on it");
  }
};

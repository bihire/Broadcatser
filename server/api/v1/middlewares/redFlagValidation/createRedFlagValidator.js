import fs from 'fs'

import redFlag from "../../models/red-flag"
import dateTime from "../../heplpers/date"
import id_auto_inc from "../../heplpers/id_auto_inc"
import joi from "joi"

import upload from '../../heplpers/multer'
import responseMsg from '../../heplpers/responseMsg'


export default (req, res, next) => {
    try {
        upload(req, res, function (err) {

            if (req.fileValidationError) {
                res.status(400).json({ status: 400, message: req.fileValidationError });

            } else {
                const allUrls = []
                const imageUrls = []
                const videoUrls = []
                const imageFiles = req.files.image;
                const videoFiles = req.files.video;
                if (imageFiles) {
                    for (const imageFile of imageFiles) {
                        const { path } = imageFile;
                        imageUrls.push(path) && allUrls.push(path)
                    }
                }
                if (videoFiles) {
                    for (const videoFile of videoFiles) {
                        const { path } = videoFile;
                        videoUrls.push(path) && allUrls.push(path)
                    }
                }
                const emptyUrlsArr = () => {
                    allUrls.forEach(obj => fs.unlinkSync(obj))
                    allUrls.length = 0
                    imageUrls.length = 0
                    videoUrls.length = 0
                }
                const { location } = JSON.parse(req.body.thisBody)
                if (location && typeof location === 'string') {
                    const latLong = location.split(',')
                    if (latLong.length !== 2) {
                        emptyUrlsArr()
                        responseMsg.errorMsg(res, 400, 'add only latitute and longitude separated by a commun on location field')
                    }
                    const findError = obj => obj === '' || isNaN(obj)
                    if (typeof latLong.find(findError) === 'string') {
                        emptyUrlsArr()
                        responseMsg.errorMsg(res, 400, 'one field is empty or not a number')

                    } else {
                        const token = res.token
                        const {
                            title,
                            type,
                            comment
                        } = JSON.parse(req.body.thisBody)


                        const artl = {
                            id: id_auto_inc(redFlag),
                            created_by: token.id,
                            title,
                            type,
                            location,
                            comment,
                            created_on: dateTime
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
                            created_on: joi
                                .date()
                                .required(),
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
                            location: joi
                                .string()
                                .trim()
                                .required(),
                            status: joi
                                .string()
                                .trim()
                                .default('draft')
                        });
                        const { error, value } = joi.validate(artl, schema);

                        if (error) {
                            emptyUrlsArr()
                            responseMsg.errorMsg(res, 400, error.details[0].message)
                        } else {
                            value.images = imageUrls
                            value.videos = videoUrls
                            req.value = value;
                            next();
                        }

                    }
                } else {
                    emptyUrlsArr()
                    responseMsg.errorMsg(res, 400, 'location is compulsory and must be type of string')
                }
            }
        })

    } catch (error) {
        responseMsg.errorMsg(res, 500, 'an error happened we are working on it')

    }
}
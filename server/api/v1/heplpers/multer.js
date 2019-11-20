
import multer from 'multer'

const storage = multer.diskStorage({
    
    destination: (req, file, cb) => {
        if (file.fieldname === "image") { // if uploading image
            cb(null, './uploads/images/');
        } else if (file.fieldname === "video"){  // else uploading video
            cb(null, './uploads/videos/');
        }
    },
    filename: (req, file, cb)=> {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
})


const fileFilter = (req, file, cb) => {
   if (file.fieldname === "video") { // if uploading video
       if (file.mimetype !== 'video/mp4') {
           req.fileValidationError = 'somevideo mimetypes are not mp4';
           return cb(new Error('goes wrong on the mimetype'), false);
       } else {
       cb(null, true);
       }
    } else {     // if uploading image
       if (file.mimetype === 'image/png' ||
           file.mimetype === 'image/jpg' ||
           file.mimetype === 'image/jpeg') {
           cb(null, true);
       } else {
           req.fileValidationError = 'some image mimetypes are not png, jpg nor jpeg';
           return cb(new Error('goes wrong on the mimetype'), false);
       }
    } 
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
}).fields([
    {
        name: 'image'
    }, {
        name: 'video'
    }
])



export default upload
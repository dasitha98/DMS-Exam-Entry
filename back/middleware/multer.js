import multer from 'multer'
import path from 'path';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({storage: storage})
// var upload = multer({storage: storage}).fields([{name: 'subCategories.selectedFiles', maxCount: 10}, {name : "selectedFiles", maxCount: 5}])

export var multipleUpload = upload.any()

// export var multipleUpload = upload.fields([{name: "selectedFiles", maxCount: 5}, {name: "subCategories.selectedFiles", maxCount: 5}])
// export var multipleUpload = upload.array("selectedFiles", 5)
// export var multipleUpload = upload
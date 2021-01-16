const multer = require('multer')
const { getProfilePekerjaModel } = require('../model/user')
const helper = require('../helper/helper')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/fileUserProfile')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})

const maxSize = 5 * 1024 * 1024
const upload = multer({
  storage,
  limits: { fileSize: maxSize }
}).single('files')

const uploadFilter = async (req, res, next) => {
  const { id } = req.params
  const checkId = await getProfilePekerjaModel(id)
  if (checkId.length > 0) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return helper.response(res, 400, err.message)
      } else if (err) {
        return helper.response(res, 400, err.message)
      }
      next()
    })
  } else {
    return helper.response(res, 404, `ID Job Seeker ${id} is Not Found`)
  }
}

module.exports = uploadFilter

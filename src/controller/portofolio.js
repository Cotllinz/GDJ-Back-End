const {
  addPortofolioModel,
  editPortofolioModel,
  deletePortofolioModel,
  getPhotoPortofolioModel,
  getPortofolioByIdModel,
  getPortofolioModel
} = require('../model/portoflio')
const helper = require('../helper/helper')
const fs = require('fs')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  addPortofolio: async (request, response) => {
    try {
      const {
        id_pekerja,
        application_name,
        repo_link,
        type_portofolio
      } = request.body
      const setPorto = {
        id_pekerja,
        application_name,
        repo_link,
        type_portofolio,
        image_portofolio:
          request.file === undefined ? '' : request.file.filename,
        create_at: new Date()
      }
      const checking = await getPortofolioModel(id_pekerja)
      if (checking.length > 0) {
        const result = await addPortofolioModel(setPorto)
        return helper.response(response, 200, 'Success Add Portofolio', result)
      } else {
        fs.unlink(
          `./upload/imagePorto/${request.file.filename}`,
          function (err) {
            if (err) console.log(err)
            console.log('File deleted')
          }
        )
        return helper.response(
          response,
          404,
          `Pekerja with id ${id_pekerja} not found`
        )
      }
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  editPortofolio: async (req, res) => {
    try {
      const { id } = req.params
      const {
        id_pekerja,
        application_name,
        repo_link,
        type_portofolio
      } = req.body
      const photo = await getPhotoPortofolioModel(id)
      console.log(photo)
      console.log(id_pekerja)
      const checkPortofolio = await getPortofolioByIdModel(id)
      if (checkPortofolio.length > 0) {
        const setData = {
          id_pekerja,
          application_name,
          repo_link,
          type_portofolio,
          update_at: new Date(),
          image_portofolio: req.file === undefined ? photo : req.file.filename
        }
        console.log(setData.image_portofolio)
        if (setData.image_portofolio !== photo) {
          fs.unlink(`./upload/imagePorto/${photo}`, function (err) {
            if (err) console.log(err)
            console.log('File deleted')
          })
        }
        console.log(id)
        const edit = await editPortofolioModel(setData, id)
        console.log(edit)
        return helper.response(
          res,
          200,
          `Success update portofolio user by id ${id_pekerja}`,
          edit
        )
      } else {
        fs.unlink(`./upload/imagePorto/${photo}`, function (err) {
          if (err) console.log(err)
          console.log('File deleted')
        })
        return helper.response(res, 404, 'ID Not Found!')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  getPortofolio: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getPortofolioModel(id)
      if (result.length > 0) {
        client.setex(`GDJportofoliobyid:${id}`, 1800, JSON.stringify(result))
        return helper.response(
          res,
          200,
          `Success get portofolio user by id ${id}`,
          result
        )
      } else {
        return helper.response(res, 404, 'ID Not Found')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deletePortofolio: async (req, res) => {
    try {
      let { id, idPekerja } = req.query
      id = parseInt(id)
      idPekerja = parseInt(idPekerja)
      const checkId = await getPortofolioByIdModel(id)
      if (checkId.length > 0) {
        const photo = await getPhotoPortofolioModel(id)
        fs.unlink(`./upload/imagePorto/${photo}`, function (err) {
          if (err) console.log(err)
          console.log('File deleted')
        })
        await deletePortofolioModel(id, idPekerja)
        return helper.response(
          res,
          200,
          `Success delete portofolio user by id ${idPekerja}`
        )
      } else {
        return helper.response(res, 404, 'ID Not Found')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}

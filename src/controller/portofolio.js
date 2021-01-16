const helper = require('../helper/helper')
const { addPortofolioModel } = require('../model/portoflio')

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
          request.file === undefined ? '' : request.file.filename
      }
      const result = await addPortofolioModel(setPorto)
      return helper.response(response, 200, 'Success Add Portofolio', result)
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}

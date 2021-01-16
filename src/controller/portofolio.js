const { addPortofolioModel } = require('../model/portoflio')
const helper = require('../helper/helper') // editPortofolioModel

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

// editPortofolio: async (req, res) => {
//   // `id`, `id_pekerja`, `application_name`, `repo_link`, `type_portofolio`, `image_portofolio`
//   try {
//     const { id_pekerja, id, posisi, at_company, date, description } = req.body
//     const setData = {
//       id_pekerja,
//       id,
//       posisi,
//       at_company,
//       date,
//       description,
//       updated_at: new Date()
//     }
//     console.log(setData.at_company)
//     const edit = await editExperienceModel(setData, id)
//     console.log(edit)
//     return helper.response(
//       res,
//       200,
//       `Success update experience user by id ${id_pekerja}`,
//       edit
//     )
//   } catch (error) {
//     console.log(error)
//     return helper.response(res, 400, 'Bad Request', error)

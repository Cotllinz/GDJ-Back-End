// portofolio
const { editPortofolioModel } = require('../model/portoflio')
const helper = require('../helper/helper')

module.exports = {
  editPortofolio: async (req, res) => {
    // `id`, `id_pekerja`, `application_name`, `repo_link`, `type_portofolio`, `image_portofolio`
    try {
      const { id_pekerja, id, posisi, at_company, date, description } = req.body
      const setData = {
        id_pekerja,
        id,
        posisi,
        at_company,
        date,
        description,
        updated_at: new Date()
      }
      console.log(setData.at_company)
      const edit = await editExperienceModel(setData, id)
      console.log(edit)
      return helper.response(
        res,
        200,
        `Success update experience user by id ${id_pekerja}`,
        edit
      )
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}

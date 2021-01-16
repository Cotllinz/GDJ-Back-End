const {
  addExperienceModel,
  editExperienceModel,
  getExperienceModel,
  getExperienceByIdModel,
  deleteExperienceModel
} = require('../model/experience')
const helper = require('../helper/helper')

module.exports = {
  getExperience: async (req, res) => {
    try {
      const { id } = req.params
      const result = await getExperienceModel(id)
      if (result.length > 0) {
        return helper.response(
          res,
          200,
          `Success update experiences user by id ${id}`,
          result
        )
      } else {
        return helper.response(res, 404, 'ID Not Found')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  addExperience: async (req, res) => {
    try {
      const experience = req.body
      let resultExperience
      for (let i = 0; i < experience.length; i++) {
        const {
          id_pekerja,
          posisi,
          at_company,
          date,
          description
        } = experience[i]
        const setExperience = {
          id_pekerja,
          posisi,
          at_company,
          date,
          description,
          created_at: new Date()
        }
        resultExperience = await addExperienceModel(setExperience)
      }
      return helper.response(
        res,
        200,
        'Success Add Experiences',
        resultExperience
      )
    } catch (err) {
      return helper.response(res, 400, 'Bad Request', err)
    }
  },
  editExperience: async (req, res) => {
    try {
      const { id_pekerja, id, posisi, at_company, date, description } = req.body
      const checkId = await getExperienceByIdModel(id)
      if (checkId.length > 0) {
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
          `Success update experiences user by id ${id_pekerja}`,
          edit
        )
      } else {
        return helper.response(res, 404, 'ID Not Found')
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },
  deleteExperience: async (req, res) => {
    try {
      let { id, idPekerja } = req.query
      id = parseInt(id)
      idPekerja = parseInt(idPekerja)
      const checkId = await getExperienceByIdModel(id)
      if (checkId.length > 0) {
        await deleteExperienceModel(id, idPekerja)
        return helper.response(
          res,
          200,
          `Success delete experience user by id ${idPekerja}`
        )
      } else {
        return helper.response(res, 404, 'ID Not Found')
      }
    } catch (error) {
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}

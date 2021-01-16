const {
  addExperienceModel,
  editExperienceModel,
  getExperienceModel,
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
          `Success update experience user by id ${id}`,
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
  addExperience: async (req, res) => {
    try {
      const experience = req.body
      console.log(experience)
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
  // deleteExperienceModel: async (req, res) => {
  //   try{
  //     const {id_pekerja, id} = req.body
  //     const checkProfile = await getExperienceModel(id_pekerja)
  //   } catch(error) {

  //   }
  // }
}

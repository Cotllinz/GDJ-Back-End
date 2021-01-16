const helper = require('../helper/helper')
const {
  addSkillModel,
  getSkillModel,
  deleteSkillModel,
  editSkillModel
} = require('../model/skill')

module.exports = {
  addSkill: async (request, response) => {
    try {
      const skill = request.body
      let result
      for (let i = 0; i < skill.length; i++) {
        const { skill_name, id_pekerja } = skill[i]
        const setData = {
          skill_name,
          id_pekerja
        }
        result = await addSkillModel(setData)
      }
      return helper.response(response, 200, 'Success add your skill', result)
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  getSkill: async (request, response) => {
    try {
      const { id } = request.params
      const result = await getSkillModel(id)
      if (result.length > 0) {
        return helper.response(response, 200, 'Success Get Skill By Id', result)
      } else {
        return helper.response(
          response,
          404,
          `There is no skill for pekerja with id ${id}`
        )
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  deleteSkill: async (request, response) => {
    try {
      const { id } = request.params
      const { idSkill } = request.body
      console.log(id)
      console.log(idSkill)
      const result = await deleteSkillModel(id, idSkill)
      if (result.length == null) {
        return helper.response(response, 200, 'Success delete skill')
      } else {
        return helper.response(response, 404, `Skill Id : ${id} Not Found`)
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  editSkill: async (request, response) => {
    try {
      const { id } = request.params
      const { skill_name } = request.body
      const setData = {
        skill_name
      }
      const checking = await getSkillModel(id)
      if (checking.length > 0) {
        const result = await editSkillModel(setData, id)
        return helper.response(response, 200, 'Success edit skill', result)
      } else {
        return helper.response(response, 404, `Skill by id : ${id} Not Found`)
      }
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}

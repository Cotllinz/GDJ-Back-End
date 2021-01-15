const helper = require('../helper/helper')
const { addSkillModel } = require('../model/skill')

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
  }
}

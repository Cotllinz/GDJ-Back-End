const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../helper/helper')
const {
  reqruiterRegisModel
} = require('../model/user')

module.exports = {
  reqruiterRegis: async (req, res) => {
    try {
      const {
        username,
        email_user,
        user_password,
        company_name,
        jabatan,
        phone_number,
        roles,
        status_user
      } = req.body
      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(user_password, salt)
      const setData = {
        username,
        email_user,
        user_password: encryptPassword,
        company_name,
        jabatan,
        phone_number,
        roles,
        status_user
      }
      const result = await reqruiterRegisModel(setData)
      return helper.response(res, 200, 'Registered Successfully', result)
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  }
}

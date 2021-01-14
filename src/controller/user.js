const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../helper/helper')
const { seekerRegisModel, loginModel } = require('../model/user')
const nodemailer = require('nodemailer')
require('dotenv').config()

module.exports = {
  register: async (req, res) => {
    try {
      const {
        username,
        email_user,
        user_password,
        company_name,
        jabatan,
        phone_number
      } = req.body
      const checkDataLogin = await loginModel(email_user)
      if (checkDataLogin.length >= 1) {
        return helper.response(
          res,
          400,
          `Invalid Register ${email_user}, Your email has already been registered`
        )
      } else {
        const salt = bcrypt.genSaltSync(10)
        const encryptPassword = bcrypt.hashSync(user_password, salt)
        if (username && email_user && user_password && phone_number) {
          if (jabatan && company_name) {
            const setData = {
              username,
              email_user,
              user_password: encryptPassword,
              company_name,
              jabatan,
              phone_number,
              roles: 1
            }
            const result = await seekerRegisModel(setData)
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.email,
                pass: process.env.pass
              }
            })
            const mailOPtion = {
              from: `${process.env.email}`,
              to: `${email_user}`,
              subject: `Hello ${email_user}, Recruraiter`,
              html: `<h2>Hello ${email_user} Thanks You for Register in Anya Coffee for activation your account please login first</h2>
                  <p>Click This Link For Activation ur account</p>
                  <a href ="http://localhost:8081/Login">Activation Email</a>`
            }
            transporter.sendMail(mailOPtion, (err, result) => {
              if (err) {
                return helper.response(res, 400, 'Error Send Email', err)
              } else {
                return helper.response(res, 200, 'Success Send Email', result)
              }
            })
            return helper.response(
              res,
              200,
              `Registered Reqruiter email ${email_user} Successfully`,
              result
            )
          } else {
            const setData = {
              username,
              email_user,
              user_password: encryptPassword,
              roles: 0
            }
            const result = await seekerRegisModel(setData)
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.email,
                pass: process.env.pass
              }
            })
            const mailOPtion = {
              from: `${process.env.email}`,
              to: `${email_user}`,
              subject: `Hello ${email_user}, Job Seaker`,
              html: `<h2>Hello ${email_user} Thanks You for Register in Anya Coffee for activation your account please login first</h2>
                  <p>Click This Link For Activation ur account</p>
                  <a href ="http://localhost:8081/Login">Activation Email</a>`
            }
            transporter.sendMail(mailOPtion, (err, result) => {
              if (err) {
                return helper.response(res, 400, 'Error Send Email', err)
              } else {
                console.log('Success Send Email !!!')
              }
            })
            return helper.response(
              res,
              200,
              `Registered Job Seeker email ${email_user} Successfully`,
              result
            )
          }
        } else {
          return helper.response(res, 400, 'All data must be filled in')
        }
      }
    } catch (error) {
      console.log(error)
      return helper.response(res, 400, 'Bad Request', error)
    }
  },

  login: async (request, response) => {
    try {
      const { email_user, user_password } = request.body
      const checkDataLogin = await loginModel(email_user)
      if (checkDataLogin.length > 0) {
        const checkPasssword = bcrypt.compareSync(
          user_password,
          checkDataLogin[0].user_password
        )
        if (checkPasssword) {
          const { id_user, email_user, roles, status_user } = checkDataLogin[0]
          if (status_user === 'ON') {
            const payload = {
              id_user,
              email_user,
              roles,
              status_user
            }
            const token = jwt.sign(payload, process.env.ACCESS, {
              expiresIn: '1hr'
            })
            const result = {
              ...payload,
              token
            }
            return helper.response(response, 200, 'Successs Login!', result)
          } else {
            return helper.response(
              response,
              400,
              "You haven't activated your account yet"
            )
          }
        } else {
          return helper.response(response, 400, 'Wrong Password!')
        }
      } else {
        return helper.response(response, 400, "You haven't registered yet!")
      }
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request!', error)
    }
  }
}

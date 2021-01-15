const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../helper/helper')
const {
  seekerRegisModel,
  loginModel,
  addRecruiterModel,
  addPekerjaModel,
  hireModel,
  notifModel,
  editProfilePekerjaModel,
  getPhotoProfilePekerjaModel
} = require('../model/user')
const nodemailer = require('nodemailer')
require('dotenv').config()
const fs = require('fs')
const redis = require('redis')
const client = redis.createClient()

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
              roles: 1,
              created_at: new Date()
            }
            const result = await seekerRegisModel(setData)
            const setDataRecruiter = {
              id_recruiter: result.id_user,
              created_at: new Date()
            }
            await addRecruiterModel(setDataRecruiter)
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              port: 587,
              secure: false,
              auth: {
                user: process.env.email,
                pass: process.env.pass
              }
            })
            const mailOPtion = {
              from: `"Get Dream Job "${process.env.email}`,
              to: `${email_user}`,
              subject: `Hello ${email_user}, Recruiter`,
              html: 'haiii'
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
            const setDataPekerja = {
              id_pekerja: result.id_user,
              created_at: new Date()
            }
            await addPekerjaModel(setDataPekerja)
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              port: 587,
              secure: false,
              auth: {
                user: process.env.email,
                pass: process.env.pass
              }
            })
            const mailOPtion = {
              from: `"Get Dream Job "${process.env.email}`,
              to: `${email_user}`,
              subject: `Hello ${email_user}, Job Seaker`,
              html: 'haiii'
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
  },
  hire: async (request, response) => {
    try {
      const { id_recruiter, id_pekerja, jobs_needed, desc_jobs } = request.body
      if (id_pekerja && jobs_needed && desc_jobs) {
        const setData = {
          id_recruiter,
          id_pekerja,
          files: request.file === undefined ? '' : request.file.filename,
          jobs_needed,
          desc_jobs,
          created_at: new Date()
        }
        const result = await hireModel(setData)
        return helper.response(
          response,
          200,
          `Sending offer letter to ${id_pekerja}`,
          result
        )
      } else {
        return helper.response(response, 400, 'All data must be filled in')
      }
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  notif: async (request, response) => {
    try {
      const { id } = request.params
      console.log(request.params)
      const hireNotif = await notifModel(id)
      if (hireNotif.length > 0) {
        client.setex(`notifById:${id}`, 3600, JSON.stringify(hireNotif))
        return helper.response(
          response,
          200,
          'You have an offering letter',
          hireNotif
        )
      } else {
        return helper.response(
          response,
          404,
          'There is no offering letter for you'
        )
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  editProfilePekerja: async (request, response) => {
    try {
      const { id } = request.params
      const photo = await getPhotoProfilePekerjaModel(id)
      const { fullname_pekerja, job_desk, city_pekerja, status_jobs, work_place, desc_pekerja } = request.body
      const setData = {
        id_pekerja: id,
        fullname_pekerja,
        job_desk,
        city_pekerja,
        status_jobs,
        work_place,
        desc_pekerja,
        image_pekerja: request.file === undefined ? photo : request.file.filename,
        update_at: new Date()
      }
      console.log(setData.image_pekerja)
      if (setData.image_pekerja !== photo) {
        fs.unlink(`./upload/fileUserProfile/${photo}`, function (err) {
          if (err) console.log(err)
          console.log('File deleted')
        })
      }
      const result = await editProfilePekerjaModel(setData, id)
      return helper.response(
        response,
        200,
        `Success update profile user by id ${id}`,
        result
      )
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}

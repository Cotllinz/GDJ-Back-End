const connection = require('../config/mysql.js')

module.exports = {
  reqruiterRegisModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user_account SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            id_user: result.insertId,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  seekerRegisModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user_account SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            id_user: result.insertId,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  },
  loginModel: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT id_user, email_user, user_password, roles, status_user FROM user_account WHERE email_user=?', email, (error, result) => {
        if (!error) {
          resolve(result)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}

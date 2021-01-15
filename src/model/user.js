const connection = require('../config/mysql.js')

module.exports = {
  seekerRegisModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO user_account SET ?',
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              id_user: result.insertId,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  addRecruiterModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'insert into profile_recruiter set ?',
        setData,
        (err, result) => {
          !err ? resolve(result) : reject(new Error(err))
        }
      )
    })
  },
  addPekerjaModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'insert into profile_pekerja set ?',
        setData,
        (err, result) => {
          !err ? resolve(result) : reject(new Error(err))
        }
      )
    })
  },
  loginModel: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id_user, email_user, user_password, roles, status_user FROM user_account WHERE email_user=?',
        email,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  hireModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO hired_jobs SET ?',
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              id: result.insertId,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  }
}

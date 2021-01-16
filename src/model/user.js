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
  confirmEmail: (code, setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'update user_account set ? where token_confirmEmail = ?',
        [setData, code],
        (err, result) => {
          const newResult = {
            ...setData
          }
          !err ? resolve(newResult) : reject(new Error(err))
        }
      )
    })
  },
  updateTokenForgetPass: (email, token) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'update user_account set ? where email_user = ?',
        [token, email],
        (err, result) => {
          const newResult = {
            ...token
          }
          !err ? resolve(newResult) : reject(new Error(err))
        }
      )
    })
  },
  updatePasswordForgot: (token, setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'update user_account set ? where token_forgotPassword = ?',
        [setData, token],
        (err, result) => {
          const newResult = {
            ...setData
          }
          !err ? resolve(newResult) : reject(new Error(err))
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
  getPhotoProfilePekerjaModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT image_pekerja AS photo FROM profile_pekerja WHERE id_pekerja=${id}`,
        (error, result) => {
          if (!error) {
            resolve(result[0].photo)
          } else {
            reject(error)
          }
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
  codeTokenCheckModel: (code) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id_user, email_user, user_password, roles, status_user FROM user_account WHERE token_confirmEmail=?',
        code,
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
  codeTokenForgotCheckModel: (code) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id_user, email_user, user_password, roles, status_user FROM user_account WHERE token_forgotPassword=?',
        code,
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
  editProfilePekerjaModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE profile_pekerja SET ? WHERE id_pekerja=${id}`,
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              id_pekerja: result.insertId,
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

const connection = require('../config/mysql')

module.exports = {
  getCompanyProfileById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM profile_recruiter WHERE id_recruiter = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },

  patchCompanyProfile: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE profile_recruiter SET ? WHERE id_recruiter = ?',
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              profile_recruiter: id,
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
  patchUserModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE user_account SET ? WHERE id_user = ?',
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              id_user: id,
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
  getIdRecruiterModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id_user FROM user_account WHERE id_user=?',
        id,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  }
}

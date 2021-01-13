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
  }
}

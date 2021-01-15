const connection = require('../config/mysql.js')

module.exports = {
  addSkillModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO skills_pekerja SET ?',
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

const connection = require('../config/mysql.js')

module.exports = {
  addExperienceModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'insert into experiance_pekerja set ?',
        setData,
        (err, result) => {
          const newResult = {
            ...setData
          }
          !err ? resolve(newResult) : reject(new Error(err))
        }
      )
    })
  },
  editExperienceModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
      `UPDATE experiance_pekerja SET ? WHERE id=${id}`,
      setData,
      (error, result) => {
        if (!error) {
          const newResult = {
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

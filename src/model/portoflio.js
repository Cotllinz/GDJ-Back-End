const connection = require('../config/mysql.js')

module.exports = {
  editPortofolioModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE portofolio SET ? WHERE id_pekerja = ?',
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              id_pekerja: id,
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

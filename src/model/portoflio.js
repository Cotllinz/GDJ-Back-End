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
  },
  deletePortofolioModel: (id, id_pekerja) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM portofolio WHERE id =${id} AND id=${id_pekerja}`,
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  addPortofolioModel: (setPorto) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO portofolio SET ?',
        setPorto,
        (error, result) => {
          if (!error) {
            const newResult = {
              id: result.insertId,
              ...setPorto
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

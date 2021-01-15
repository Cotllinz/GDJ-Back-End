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
  },
  getSkillModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT skills_pekerja.skill_name FROM skills_pekerja WHERE id_pekerja = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  deleteSkillModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM skills_pekerja WHERE id_pekerja = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  editSkillModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE skills_pekerja SET ? WHERE id_pekerja = ?',
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

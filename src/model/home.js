const connection = require('../config/mysql')

module.exports = {
  getDataCountModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total FROM profile_pekerja',
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error))
        }
      )
    })
  },
  searchSorthModel: (limit, offset, searching, coba, sorting) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT profile_pekerja.id_pekerja, fullname_pekerja,job_require, job_desk, city_pekerja, skill_name FROM profile_pekerja JOIN skills_pekerja ON profile_pekerja.id_pekerja = skills_pekerja.id_pekerja WHERE skill_name LIKE '%${searching}%' ${coba} ${sorting} LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getSkill: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'select id,skill_name from skills_pekerja where id_pekerja = ?',
        id,
        (err, result) => {
          !err ? resolve(result) : reject(new Error(err))
        }
      )
    })
  },
  getSearchCountModel: (search, status) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) as total FROM skills_pekerja join profile_pekerja on profile_pekerja.id_pekerja = skills_pekerja.id_pekerja WHERE skill_name LIKE "%${search}%" ${status}`,
        (err, result) => {
          !err ? resolve(result[0].total) : reject(new Error(err))
        }
      )
    })
  }
}
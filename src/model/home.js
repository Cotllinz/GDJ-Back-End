const connection = require('../config/mysql')

module.exports = {
  getDataCountModel: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT COUNT(*) AS total_pekerja FROM profile_pekerja',
        (error, result) => {
          !error ? resolve(result[0].total) : reject(new Error(error))
        }
      )
    })
  },
  searchSorthModel: (limit, offset, searching, sortStatus, sorting) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT fullname_pekerja, job_desk, city_pekerja, skill_name FROM profile_pekerja JOIN skills_pekerja ON profile_pekerja.id_pekerja = skills_pekerja.id_pekerja WHERE skill_name LIKE '%${searching}%' AND status_jobs LIKE '%${sortStatus}%' ORDER BY ${sorting} ASC LIMIT ${limit} OFFSET ${offset}`,
        // `SELECT * FROM product WHERE product_name LIKE '%${searching}%' AND category_id LIKE '%${id}%' ORDER BY ${sorting} ASC LIMIT ${limit} OFFSET ${offset}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getSearchCountModel: (search) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) as total FROM skills_pekerja WHERE skill_name LIKE "%${search}%"`,
        (err, result) => {
          !err ? resolve(result[0].total) : reject(new Error(err))
        }
      )
    })
  }
}

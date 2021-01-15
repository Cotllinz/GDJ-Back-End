const connection = require('../config/mysql.js')

module.exports = {
  hireModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO hired_jobs SET ?',
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
  notifModels: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT id_recruiter, jobs_needed, desc_jobs FROM hired_jobs WHERE id_pekerja = ${id}`,
        // `SELECT hired_jobs.jobs_needed, hired_jobs.desc_jobs, profile_recruiter.city_recruiter, profile_recruiter.image_recruiter FROM hired_jobs JOIN profile_recruiter ON hired_jobs.id_recruiter = profile_recruiter.id_recruiter = ${id}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}

const connection = require('../config/mysql.js')

module.exports = {
  seekerRegisModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO user_account SET ?',
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              id_user: result.insertId,
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
  addRecruiterModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'insert into profile_recruiter set ?',
        setData,
        (err, result) => {
          !err ? resolve(result) : reject(new Error(err))
        }
      )
    })
  },
  addPekerjaModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'insert into profile_pekerja set ?',
        setData,
        (err, result) => {
          !err ? resolve(result) : reject(new Error(err))
        }
      )
    })
  },
  getPhotoProfilePekerjaModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT image_pekerja AS photo FROM profile_pekerja WHERE id_pekerja=${id}`, (error, result) => {
        if (!error) {
          resolve(result[0].photo)
        } else {
          reject(error)
        }
      })
    })
  },
  loginModel: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT id_user, email_user, user_password, roles, status_user FROM user_account WHERE email_user=?',
        email,
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
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
  notifModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT id_recruiter, jobs_needed, desc_jobs FROM hired_jobs WHERE id_pekerja = ${id}`,
        // `SELECT hired_jobs.jobs_needed, hired_jobs.desc_jobs, profile_recruiter.city_recruiter, profile_recruiter.image_recruiter FROM hired_jobs JOIN profile_recruiter ON hired_jobs.id_recruiter = profile_recruiter.id_recruiter = ${id}`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  editProfilePekerjaModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
      `UPDATE profile_pekerja SET ? WHERE id_pekerja=${id}`,
      setData,
      (error, result) => {
        if (!error) {
          const newResult = {
            id_pekerja: result.insertId,
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

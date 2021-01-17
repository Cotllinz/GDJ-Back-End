const helper = require('../helper/helper')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  notifRedis: (request, response, next) => {
    const { id } = request.params
    client.get(`GDJnotifById:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          response,
          200,
          'You have an offering letter',
          JSON.parse(result)
        )
      } else {
        next()
      }
    })
  },
  getProfilePekerjaByIdRedis: (request, response, next) => {
    const { id } = request.params
    client.get(`GDJprofilepekerjabyid:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          response,
          200,
          `Success Get Data Profil Job Seeker By Id ${id}`,
          JSON.parse(result)
        )
      } else {
        next()
      }
    })
  },
  getPortofolioByIdRedis: (request, response, next) => {
    const { id } = request.params
    client.get(`GDJportofoliobyid:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          response,
          200,
          `Success Get Data Portofolio Job Seeker By Id ${id}`,
          JSON.parse(result)
        )
      } else {
        next()
      }
    })
  },
  getExperienceByIdRedis: (request, response, next) => {
    const { id } = request.params
    client.get(`GDJexperiencebyid:${id}`, (error, result) => {
      if (!error && result != null) {
        return helper.response(
          response,
          200,
          `Success Get Data Experience Job Seeker By Id ${id}`,
          JSON.parse(result)
        )
      } else {
        next()
      }
    })
  },
  clearRedis: (request, response, next) => {
    client.keys('GDJ*', (_error, result) => {
      if (result.length > 0) {
        result.forEach((value) => {
          client.del(value)
        })
      }
      next()
    })
  }
}

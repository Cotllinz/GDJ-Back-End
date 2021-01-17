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

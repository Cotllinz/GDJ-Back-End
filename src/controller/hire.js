const helper = require('../helper/helper')
const { hireModel, notifModels } = require('../model/hire')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  hire: async (request, response) => {
    try {
      const { id_recruiter, id_pekerja, jobs_needed, desc_jobs } = request.body
      if (id_pekerja && jobs_needed && desc_jobs) {
        const setData = {
          id_recruiter,
          id_pekerja,
          files: request.file === undefined ? '' : request.file.filename,
          jobs_needed,
          desc_jobs,
          created_at: new Date()
        }
        const result = await hireModel(setData)
        return helper.response(
          response,
          200,
          `Sending offer letter to ${id_pekerja}`,
          result
        )
      } else {
        return helper.response(response, 400, 'All data must be filled in')
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
  notif: async (request, response) => {
    try {
      const { id } = request.params
      const hireNotif = await notifModels(id)
      if (hireNotif.length > 0) {
        client.setex(`GDJnotifById:${id}`, 1800, JSON.stringify(hireNotif))
        return helper.response(
          response,
          200,
          'You have an offering letter',
          hireNotif
        )
      } else {
        return helper.response(
          response,
          404,
          'There is no offering letter for you'
        )
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}

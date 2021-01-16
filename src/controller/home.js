const helper = require('../helper/helper')
const qs = require('querystring')
const {
  searchSorthModel,
  getDataCountModel,
  getSearchCountModel
} = require('../model/home')

module.exports = {
  searchSort: async (request, response) => {
    try {
      let { page, limit, search, status, sort } = request.query
      page = parseInt(page)
      limit = parseInt(limit)
      let searching
      if (search) {
        searching = search
      } else {
        searching = ''
      }
      let sorting
      if (sort) {
        sorting = sort
      } else {
        sorting = ''
      }
      let sortStatus
      if (status) {
        sortStatus = status
      } else {
        sortStatus = ''
      }
      let totalData
      if (search) {
        totalData = await getSearchCountModel(search)
      } else {
        totalData = await getDataCountModel()
      }
      const totalPage = Math.ceil(totalData / limit)
      const offset = page * limit - limit
      const prevLink =
        page > 1
          ? qs.stringify({ ...request.query, ...{ page: page - 1 } })
          : null
      const nextLink =
        page < totalPage
          ? qs.stringify({ ...request.query, ...{ page: page + 1 } })
          : null
      const newPage = {
        page,
        limit,
        totalPage,
        totalData,
        nextLink: nextLink && `http://localhost:3000/data/limit?${nextLink}`,
        prevLink: prevLink && `http://localhost:3000/data/limit?${prevLink}`
      }
      const result = await searchSorthModel(
        limit,
        offset,
        searching,
        sortStatus,
        sorting
      )
      return helper.response(
        response,
        200,
        'Succes get data pekerja',
        result,
        newPage
      )
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}

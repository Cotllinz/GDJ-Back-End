const helper = require('../helper/helper')
const qs = require('querystring')
require('dotenv').config()
const {
  searchSorthModel,
  getSearchCountModel,
  getSkill,
  getDataBySkillSortingModel,
  getDataCountModel
} = require('../model/home')

module.exports = {
  searchSort: async (request, response) => {
    try {
      let { page, limit, search, sort, coba } = request.query
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
      let cobas
      if (coba) {
        cobas = coba
      } else {
        cobas = ''
      }
      console.log(cobas)
      const totalData = await getSearchCountModel(searching, cobas)
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
        nextLink: nextLink && `http://localhost:3000/home/?${nextLink}`,
        prevLink: prevLink && `http://localhost:3000/home/?${prevLink}`
      }
      const result = await searchSorthModel(
        limit,
        offset,
        searching,
        cobas,
        sorting
      )
      for (let i = 0; i < result.length; i++) {
        result[i].skills = await getSkill(result[i].id_pekerja)
      }
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
  },
  getDataBySkillSorting: async (request, response) => {
    try {
      let { page, limit } = request.query
      page = parseInt(page)
      limit = parseInt(limit)
      const totalData = await getDataCountModel()
      console.log(totalData)
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
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
        nextLink:
        nextLink && `http://localhost:${process.env.PORT}/home/getsortingskill/?${nextLink}`,
        prevLink:
        prevLink && `http://localhost:${process.env.PORT}/home/getsortingskill/?${prevLink}`
      }
      const result = await getDataBySkillSortingModel(limit, offset)
      return helper.response(
        response,
        200,
        'Success get data pekerja by sorting skill',
        result, pageInfo
      )
    } catch (error) {
      console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  }
}

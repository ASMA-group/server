const { axiosLovePercent,axiosRandom,axiosSimsimi } = require('../config/axios')

class ApisController{
  static getPercent(req, res, next) {
    let { firstName, secondName } = req.query
    axiosLovePercent({
      method: 'get',
      url: `?fname=${firstName}&sname=${secondName}`
    })
      .then(({ data }) => {
        if (data.percentage == 0) {
          next({status: 400, msg: `Input name is required!`})
        } else {
          res.status(200).json(data)
        }
      })
      .catch(next)
  }

  static getChat(req, res, next) {
    let { text } = req.body
    axiosSimsimi({
      method: 'post',
      data: JSON.stringify({
        "utext": `${text}`,
        "lang": "id"
      })
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }

  static getPerson(req, res, next) {
    let { gender } = req.params
    axiosRandom({
      method: 'get',
      url: `${gender}`
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(next)
  }
}

module.exports = ApisController
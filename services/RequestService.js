/**
 * Created by kisnows on 2017/6/10.
 */
const request = require('request')
module.exports = {
  _getUrl(api) {
    const urlPrefix = 'https://yunbi.com'
    return `${urlPrefix}/${api}`
  },
  generateSign(method, api, params) {
    return SignService(method.toUpperCase(), api, params)
  },
  get(api, params) {
    return new Promise((resolve, reject) => {
      sails.log.info('get', this._getUrl(api))
      request({
        url: this._getUrl(api),
        headers: {
          'Accept': 'application/json'
        },
        qs: Object.assign({}, params, this.generateSign('GET', api, params))
      }, function (err, res, body) {
        if (err) {
          sails.log.error(err)
          return reject(err)
        }
        if (res.contentType === 'application/json') {
          resolve(JSON.parse(body))
        } else {
          resolve(body)
        }
      })
    })
  },
  post(api, params) {
    return new Promise((resolve, reject) => {
      sails.log.info('post', this._getUrl(api))
      request.post(
        {
          url: this._getUrl(api),
          headers: {
            'Accept': 'application/json'
          },
          formData: Object.assign({}, params, this.generateSign('POST', api, params))
        }, function (err, res, body) {
          if (err) {
            sails.log.error(err)
            return reject(err)
          }
          resolve(JSON.parse(body))
        })
    })
  }
}

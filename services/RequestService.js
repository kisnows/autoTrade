/**
 * Created by kisnows on 2017/6/10.
 */
const request = require('request')
const SignService = require('./SignService')
const _ = require('lodash')
module.exports = {
  _getUrl(api) {
    const urlPrefix = 'https://yunbi.com'
    return `${urlPrefix}/${api}`
  },
  _getParams(params) {
    let obj = {}
    _.keys(params, key => {
      !_.isUndefined() && (obj[key] = params[key])
    })
    return obj
  },
  generateSign(method, api, params) {
    return SignService(method.toUpperCase(), api, params)
  },
  get(api, params) {
    // FIXME 带上默认参数 access_key tonce signature
    return new Promise((resolve, reject) => {
      console.info('GET', this._getUrl(api))
      params = Object.assign({}, params, this.generateSign('GET', api, params))
      params = this._getParams(params)
      request({
        url: this._getUrl(api),
        headers: {
          'Accept': 'application/json'
        },
        qs: params
      }, (err, res, body) => {
        if (err) {
          console.error('GET', this._getUrl(api), err)
          return reject(err)
        }
        if (res.statusCode >= 200 && res.statusCode < 400) {
          if (res.headers['content-type'] === 'application/json') {
            resolve(JSON.parse(body))
          } else {
            resolve(body)
          }
        } else {
          reject(body)
        }

      })
    })
  },
  post(api, params) {
    return new Promise((resolve, reject) => {
      console.info('POST', this._getUrl(api))
      params = Object.assign({}, params, this.generateSign('POST', api, params))
      params = this._getParams(params)
      // fixme formdata
      request.post(
        {
          url: this._getUrl(api),
          formData: params
        }, (err, res, body) => {
          if (res.statusCode >= 200 && res.statusCode < 400) {
            if (res.headers['content-type'] === 'application/json') {
              resolve(JSON.parse(body))
            } else {
              resolve(body)
            }
          } else {
            reject(body)
          }
        })
    })
  }
}

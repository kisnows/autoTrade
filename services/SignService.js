/**
 * Created by yq123 on 2017/6/9.
 */
const crypto = require('crypto')
const pwd = require('../pwd')
const queryString = require('querystring')
module.exports = function (method, api, params) {
  const tonce = new Date().getTime()
  // DONE  对 url 参数按照字幕顺序排序后转化为 queryString
  function sorted (o) {
    let p = Object.create(null)
    for (const k of Object.keys(o).sort()) p[k] = o[k];
    return p
  }
  function getParams(params) {
    let obj = {}
    _.keys(params).forEach(key => {
      if (!_.isUndefined(params[key])) {
        obj[key] = params[key]
      }
    })
    return obj
  }
  let paramObj = sorted(Object.assign({}, params, {
    access_key: pwd.ACCESS_KEY,
    tonce
  }))

  const payload = `${method}|${api}|${queryString.stringify(paramObj)}`
  const sign = crypto.createHmac('sha256', pwd.SECRET_KEY).update(payload).digest('hex')
  // console.log(crypto.createHmac('sha256','yyy').update("GET|/api/v2/markets|access_key=xxx&foo=bar&tonce=123456789").digest('hex'))
  return {
    signature: sign,
    tonce,
    access_key: pwd.ACCESS_KEY
  }
}

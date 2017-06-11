/**
 * Created by kisnows on 2017/6/10.
 */
const request = require('request')
const url = '/v2/tickers'
module.exports = {
  getTickers() {
    return ApiService.get(url)
  }
}

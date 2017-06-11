/**
 * Created by yq123 on 2017/6/7.
 */
const request = require('request')
const url = '/v2/me/me'
module.exports = {
  getUserInfo() {
    return ApiService.get(url)
  }
}

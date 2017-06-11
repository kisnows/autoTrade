/**
 * Created by kisnows on 2017/6/9.
 */
const request = require('request')
module.exports = {
  getAllMarket() {
    return new Promise((resolve, reject) => {
      request.get('/v2/markets')
        .on('response', function (response) {
          resolve(JSON.stringify(response.body))
        })
        .on('error', function (err) {
          reject(err)
        })
    })
  }
}

/**
 * Created by kisnows on 2017/6/11.
 */
const ApiService = require('../services/ApiService')
const Member = require('../modals/Member')
const Trade = require('../modals/Trade')
const Account = require('../modals/Account')
const mongoose = require('mongoose')
module.exports = function () {
  // ApiService.getUserInfo()
  //   .then(data => {
  //     console.log(data)
  //     Member.update({}, data, (err, me) => {
  //       if (err) return console.error(err)
  //       console.log('me', me)
  //     })
  //   })
  //   .catch(err => console.error(err))
  ApiService.getMyTrades('etccny', {limit: 10})
    .then(data => {
      Trade.findOneAndUpdate({id: data.id}, data, (err, trade) => {
        if (err) console.error(err)
        console.log('trade', trade)
      })
    })
    .catch(err => console.error(err))
  // ApiService.createOrder('etccny', 'sell', '1', '200')
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(err => console.error(err))
}

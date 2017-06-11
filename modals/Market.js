/**
 * Created by yq123 on 2017/6/8.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MarketSchema = new Schema({
  buy: {
    type: String
  },
  sell: {
    type: String
  },
  low: {
    type: String
  },
  high: {
    type: String
  },
  last: {
    type: String
  },
  vol: {
    type: String
  }
})
module.exports = mongoose.model('Market', MarketSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TradeSchema = new Schema({
  id: {
    type: Number,
    require: true
  },
  price: {
    type: String
  },
  volume: {
    type: String
  },
  market: {
    type: String
  },
  created_at: {
    type: Date
  },
  order_id: {
    type: Number
  },
  side: {
    type: String,
    enum: ['buy', 'sell']
  }
})
module.exports = mongoose.model('Trade', TradeSchema)
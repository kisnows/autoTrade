const mongoose = require('mongoose')
const Schema = mongoose.Schema
const OrderSchema = new Schema({
  id: {
    type: Number,
    primary: true,
    require: true
  },
  side: {
    type: String,
    enum: ['buy', 'sell']
  },
  price: {
    type: String
  },
  avg_price: {
    type: String
  },
  state: {
    type: String,
    enum: ['wait', 'done', 'cancel']
  },
  market: {
    type: String
  },
  created_at: {
    type: Date
  },
  volume: {
    type: String
  },
  remaining_volume: {
    type: String
  },
  executed_volume: {
    type: String
  },
  trades_count: {
    type: Number
  }
})
module.exports = mongoose.model('Order', OrderSchema)
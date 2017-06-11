const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AccountSchema = new Schema({
  currency: {
    type: String
  },
  balance: {
    type: String
  },
  locked: {
    type: String
  }
})
exports.AccountSchema = AccountSchema
module.exports = mongoose.model('Account', AccountSchema)
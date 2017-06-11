/**
 * Created by yq123 on 2017/6/8.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const Account = require('./Account')
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
const MemberSchema = new Schema({
  sn: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  activated: {
    type: Boolean
  },
  accounts: [AccountSchema]
})
module.exports = mongoose.model('Member', MemberSchema)
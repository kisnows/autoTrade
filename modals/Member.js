/**
 * Created by yq123 on 2017/6/8.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
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
  accounts: {
    type: [{type: Schema.Types.objectId, ref: 'Account'}]
  }
})
module.exports = mongoose.model('Member',MemberSchema)
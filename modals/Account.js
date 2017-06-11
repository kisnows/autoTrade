/**
 * Account.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
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

module.exports = mongoose.model('Account',AccountSchema)
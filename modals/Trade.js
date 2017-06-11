/**
 * Trade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      primary: true,
      require: true
    },                                   // 交易的唯一ID
    price: {
      type: String
    },                         // 成交价
    volume: {
      type: String
    },                          // 成交数量
    market: {
      type: String
    },                        // 交易所属的市场
    created_at: {
      type: 'datetime'
    },      // 成交时间
    order_id: {
      type: 'integer'
    },                           // buy/sell 买或者卖
    side: {
      type: String,
      enum: ['buy', 'sell']
    }// 交易所属 Order ID
  }
}


/**
 * Order.js
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
    },
    side: {
      type: String,
      enum: ['buy', 'sell']
    },
    price: {
      type: String
    },                        // 出价
    avg_price: {
      type: String
    },                        // 平均成交价
    state: {
      type: String,
      enum: ['wait', 'done', 'cancel']
    },
    market: {
      type: String
    },                       // 订单参与的交易市场
    created_at: {
      type: 'datetime'
    },     // 下单时间 ISO8601格式
    volume: {
      type: String
    },                        // 购买/卖出数量
    remaining_volume: {
      type: String
    },               // 还未成交的数量 remaining_volume 总是小于等于 volume
    //   在订单完全成交时变成 0
    executed_volume: {
      type: String
    },                // 已成交的数量
    //   volume = remaining_volume + executed_volume
    trades_count: {
      type: 'integer'
    },                        // 订单的成交数 整数值
    //   未成交的订单为 0 有一笔成交的订单为 1
    //   通过该字段可以判断订单是否处于部分成交状态
  }

}


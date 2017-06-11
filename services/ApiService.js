/**
 * Created by kisnows on 2017/6/11.
 */
const Request = require('./RequestService')
const apiList = {
  me: '/api/v2/members/me',
  tickers: '/api/v2/tickers',
  markets: '/api/v2/markets',
  order: '/api/v2/order',
  clear: '/api/v2/orders/clear',
  delete_order: '/api/v2/order/delete',
  multi_orders: '/api/v2/orders/multi',
  orders: '/api/v2/orders',
  order_book: '/api/v2/order_book',
  trades: '/api/v2/trades',
  trades_me: '/api/v2/trades/my'
}
module.exports = {
  getMyInfo() {
    return Request.get(apiList.me)
  },
  /**
   * 获取当前市场行情
   * @param market {string} Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btccny'. All available markets can be found at /api/v2/markets.
   * @returns {promise}
   */
  getTickers(market) {
    if (market) return Request.get(`${apiList.tickers}/${market}`)
    return Request.get(apiList)
  },
  /**
   * 获取指定 order 详情
   * @param id {number} 订单 id
   */
  getOrder(id) {
    return Request.get(id)
  },
  deleteOrder() {

  },
  getMyTrades() {

  }
}

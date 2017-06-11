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
  orders: '/api/v2/orders',
  multi_orders: '/api/v2/orders/multi',
  order_book: '/api/v2/order_book',
  trades: '/api/v2/trades',
  trades_me: '/api/v2/trades/my',
  depth: '/api/v2/depth'
}
module.exports = {
  getUserInfo() {
    return Request.get(apiList.me)
  },
  /**
   * 获取我的订单
   * @param market {string} Unique market id.
   * @param [limit] {number} Limit the number of returned trades. Default to 50.
   * @param [timestamp] {number} An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned.
   * @param [from] {number} Trade id. If set, only trades created after the trade will be returned.
   * @param [to] {number} Trade id. If set, only trades created before the trade will be returned.
   * @param [order_by] If set, returned trades will be sorted in specific order, default to 'desc'.
   * @return {promise}
   */
  getMyTrades(market, {limit, timestamp, from, to, order_by} = {}) {
    return Request.get(apiList.trades_me, {
      market,
      limit,
      timestamp,
      from,
      to,
      order_by
    })
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
   * @return {promise}
   */
  getOrderDetail(id) {
    return Request.get(apiList.order, {id})
  },
  /**
   * 获取用户当前的订单列表
   * @param market {string} Unique market id.
   * @param [state] {string} Filter order by state, default to 'wait' (active orders).
   * @param [limit] {number} Limit the number of returned orders, default to 100.
   * @param [page] {number} Specify the page of paginated results.
   * @param [order_by] {string} If set, returned orders will be sorted in specific order, default to 'asc'.
   */
  getOrders(market, {state, limit, page, order_by} = {}) {
    return Request.get(apiList.orders, {
      market,
      state,
      limit,
      page,
      order_by
    })
  },
  /**
   * 创建一个订单
   * @param market {string} Unique market id
   * @param side {string}  ['sell','buy]
   * @param volume {string} The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order's volume would be '5.0', its remaining_volume would be '2.0', its executed volume is '3.0'.
   * @param price {string} Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 CNY, the price is '3000.0'
   * @param [ord_type]
   */
  createOrder(market, side, volume, price, ord_type) {
    return Request.post(apiList.orders, {
      market, side, volume, price, ord_type
    })
  },
  /**
   * 取消一个订单
   * @param id {number} 订单 id
   * @returns {promise}
   */
  deleteOrder(id) {
    return Request.post(apiList.delete_order, {id})
  },
  /**
   * 取消所有订单
   * @param side {string} ['sell','buy] If present, only sell orders (asks) or buy orders (bids) will be canncelled.
   */
  deleteAllOrders(side) {
    return Request.post(apiList.clear, {side})
  }

}

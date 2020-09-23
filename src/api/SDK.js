export const SDK = {
  get: async (symbol) => {
    const orderBook = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}`)
    const data = await orderBook.json()
    return data
  },
  subscribe: (symbol) => {
    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`)
    return socket
  }
}

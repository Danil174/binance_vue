export const SDK = {
  get: async (symbol) => {
    const glass = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}`)
    const data = glass.data.json()
    return await data
  }
}

// fetch('https://api.binance.com/api/v3/depth?symbol=BTCUSDT')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// let socket = new WebSocket("wss://stream.binance.com:9443/ws/bnbbtc@depth");
// socket.onmessage = function(event) {
//   console.log(`[message] Данные получены с сервера: ${event.data}`);
// };

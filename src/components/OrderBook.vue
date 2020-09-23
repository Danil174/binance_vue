<template>
  <div>
    <h1>OrderBook page</h1>
    <div class="wrapper">
      <Table :name="'bids'" :data="this.bids" />
      <Table :name="'asks'" :data="this.asks" />
    </div>
  </div>
</template>

<script>
import Table from './Table'
export default {
  name: 'OrderBook',
  components: {
    Table
  },
  data: () => ({
    symbol: 'BTCUSDT',
    asks: [],
    bids: [],
    stream: null
  }),
  async created () {
    await this.getOrderBook()
    // this.setStream()
    this.$bus.$on('symbol', symbol => {
      this.symbol = symbol
      // this.stream.close()
      // this.setStream()
    })
  },
  methods: {
    async getOrderBook () {
      const { bids, asks } = await this.$sdk.get(this.symbol)
      this.asks = asks.reverse()
      this.bids = bids.reverse()
    },
    setStream () {
      this.stream = this.$sdk.subscribe(this.symbol)
      this.stream.onmessage = async event => {
        const { a: asks, b: bids } = JSON.parse(event.data)
        asks.reverse()
        bids.reverse()
        this.asks.splice(this.asks.length - asks.length, asks.length)
        this.bids.splice(this.bids.length - bids.length, bids.length)
        this.asks = [...asks, ...this.asks]
        this.bids = [...bids, ...this.bids]
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .wrapper {
    display: flex;
    justify-content: space-around;
  }
</style>

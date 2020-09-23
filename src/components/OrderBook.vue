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
    bids: []
  }),
  async created () {
    await this.snapshot()
    this.$bus.$on('symbol', symbol => {
      this.symbol = symbol
    })
  },
  methods: {
    async snapshot () {
      const { bids, asks } = await this.$sdk.get(this.symbol)
      this.asks = asks.reverse()
      this.bids = bids.reverse()
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

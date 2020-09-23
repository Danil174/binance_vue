<template>
  <div>
    <h4>{{ symbol }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data: () => ({
    symbol: 'BTCUSDT'
  }),
  created () {
    this.$bus.$on('symbol', symbol => {
      this.symbol = symbol
    })
  }
}
</script>

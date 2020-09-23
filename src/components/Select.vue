<template>
  <select
    v-model="currentSymbol"
    @change="changeSymbol"
  >
    <option
      v-for="(symbol, index) in symbols"
      :key="index"
      class="select__option"
    >
      {{ symbol }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  data: () => ({
    symbols: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
    currentSymbol: 'BTCUSDT'
  }),
  methods: {
    changeSymbol () {
      console.log(this.currentSymbol)
      this.$bus.$emit('symbol', this.currentSymbol)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

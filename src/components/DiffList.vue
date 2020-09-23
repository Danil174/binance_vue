<template>
  <ul class="list">
    <li
        v-for="it in this.diffHistory"
        :key="it"
        class="list__list-item"
    >
      request to {{ it }} in
      <strong>{{new Date().toLocaleString()}}</strong>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DiffList',
  data: () => ({
    diffHistory: []
  }),
  created () {
    this.$bus.$on('symbol', symbol => {
      this.diffHistory.push(symbol)
    })
  }
}
</script>

<style lang="less" scoped>
  .list {
    margin: 0;
    padding: 0;
    list-style: none;

    &__list-item {
      margin-top: 8px;
    }
  }
</style>

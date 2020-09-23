<template>
  <div id="app">
    <Navbar
      :tabs="tabs"
      v-on:changeTab="tab => this.tabs.currentTab = tab"
    />
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
  </div>
</template>

<script>
import Navbar from '../src/components/Navbar'
export default {
  name: 'app',
  data: () => ({
    tabs: {
      tabsArr: ['OrderBook', 'Controls'],
      currentTab: 'OrderBook'
    }
  }),
  computed: {
    currentComponent () {
      console.log(this.tabs.currentTab)
      return this.tabs.currentTab
    }
  },
  components: {
    Navbar,
    Controls: () => import(/* webpackChunkName: "about" */ '../src/components/Controls'),
    OrderBook: () => import(/* webpackChunkName: "about" */ '../src/components/OrderBook')
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

</style>

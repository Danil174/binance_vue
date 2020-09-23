<template>
<header class="header">
  <nav class="header__nav">
    <ul class="header__list">
      <li
        v-for="tab in tabs.tabsArr"
        :key="tab"
        :class="['header__link', {'header__link--active': tabs.currentTab === tab}]"
        @click="changeTab(tab)"
      >
        {{ tab }}
      </li>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
  props: ['tabs'],
  name: 'NavBar',
  data: () => ({}),
  methods: {
    changeTab (tab) {
      this.$emit('changeTab', tab)
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    background-color: rgba(0,0,0,.03);
    height: 70px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__list {
      margin: 0;
      padding: 0;

      display: flex;
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      height: 36px;
      padding: 0 8px;
      cursor: pointer;
      border-radius: 10px;

      &--active {
        background-color: #0251f8;
        color: #fff;
      }

      &:not(:first-child) {
        margin-left: 20px;
      }
    }
  }
</style>

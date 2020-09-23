<template>
<header class="header">
  <nav class="header__nav">
    <ul class="header__list">
      <router-link
        tag="li"
        to="/"
        exact
        active-class="header__link--active"
        class="header__link"
      >
        OrderBook
      </router-link>
      <router-link
        tag="li"
        to="/controls"
        active-class="header__link--active"
        class="header__link"
      >
        Controls
      </router-link>
    </ul>
  </nav>
</header>
</template>

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

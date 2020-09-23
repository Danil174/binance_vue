<template>
  <div>
    <div class="table">
      <div class="table__thead">
        <h3 class="table__caption">{{ name }}</h3>
        <p class="table__row">
          <span class="table__cell">Price</span>
          <span class="table__cell">Ammount</span>
          <span class="table__cell table__cell--hide-in-mob">Total</span>
        </p>
      </div>
    </div>
    <div class="table__wrapper">
      <div class="table">
        <div class="table__tbody">
          <p class="table__row" v-for="(item, index) in data" :key="index">
            <span class="table__cell">{{ item[0] }}</span>
            <span class="table__cell">{{ item[1] }}</span>
            <span class="table__cell table__cell--hide-in-mob">
              {{ item[0] * item[1] }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['data', 'name']
}
</script>
<style lang="less" scoped>
  .table {
    width: 48vw;
    text-align: center;

    &__wrapper {
      height: calc(100vh - 270px);
      overflow: hidden;
      width: 100%;
      border-bottom: 2px solid rgba(0, 0, 0, 0.5);

      &:active,
      &:hover {
        overflow: auto;
      }

      .table,
      .table__row:last-child .table__cell {
        border-bottom-width: 0;
      }
    }

    &__caption {
      padding: 0;
      margin: 0;
      border-bottom: 0;
    }

    &__row {
      padding: 0;
      margin: 0;
      display: flex;
    }

    &__caption,
    &__cell {
      border: 1px solid rgba(0, 0, 0, 0.5);
      padding: 10px 15px;
    }

    &__cell {
      overflow: hidden;
      text-overflow: ellipsis;
      width: 30%;
    }
  }

  @media (max-width: 790px) {
    .table__caption {
      width: 69%;
    }
    .table__cell--hide-in-mob {
      display: none;
    }
  }

  @media (max-width: 535px) {
    .table__caption {
      width: 58%;
    }
    .table {
      font-size: 12px;
    }
    .table__cell {
      padding: 6px 6px;
    }
  }
</style>

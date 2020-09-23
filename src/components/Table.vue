<template>
  <div>
    <table class="table">
      <caption class="table__caption">{{ name }}</caption>
      <thead class="table__thead">
        <tr class="table__row">
          <th class="table__cell">Price</th>
          <th class="table__cell">Ammount</th>
          <th class="table__cell table__cell--hide-in-mob">Total</th>
        </tr>
      </thead>
    </table>
    <div class="table__wrapper">
      <table class="table">
        <tbody class="table__tbody">
          <tr class="table__row" v-for="(item, index) in data" :key="index">
            <td class="table__cell">{{ item[0] }}</td>
            <td class="table__cell">{{ item[1] }}</td>
            <td class="table__cell table__cell--hide-in-mob">
              {{ item[0] * item[1] }}
            </td>
          </tr>
        </tbody>
      </table>
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
    border-collapse: collapse;
    border: 2px solid rgba(0, 0, 0, 0.5);
    width: 100%;
    text-align: center;

    &__wrapper {
      height: calc(100vh - 270px);
      overflow: hidden;
      width: 100%;
      border-bottom: 2px solid rgba(0, 0, 0, 0.5);

      &:hover {
        overflow: auto;
      }

      .table,
      .table__row:last-child .table__cell {
        border-bottom-width: 0;
      }
    }

    &__caption {
      border-bottom: 0;
    }

    &__caption,
    &__cell {
      border: 1px solid rgba(0, 0, 0, 0.5);
      padding: 10px 15px;
    }
  }

  @media (max-width: 768px) {
    .table__cell--hide-in-mob {
      display: none;
    }
  }
</style>

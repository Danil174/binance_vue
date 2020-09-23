<template>
  <div>
    <h1>Controls page</h1>
    <Select />
    <DiffList />
  </div>
</template>

<script>
import Select from './Select'
import DiffList from './DiffList'
export default {
  name: 'Controls',
  components: {
    Select,
    DiffList
  }
}
</script>

<template>
  <div class="create-board"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
.create-board {
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(190, 190, 190);
  min-width: 280px;
  height: 170px;
}
.feather {
  fill: gray;
}
</style>

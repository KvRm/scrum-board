<template>
  <router-link to="/board">
    <div class="board-preview">
      <p class="title">Название доски</p>
    </div>
  </router-link>
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
.board-preview {
  display: grid;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(190, 190, 190);
  background: #fff;
  min-width: 280px;
  height: 170px;
}
.board-preview:hover {
  background: var(--light-gray);
  cursor: pointer;
}
</style>

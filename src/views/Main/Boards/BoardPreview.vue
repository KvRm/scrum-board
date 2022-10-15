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
  min-width: 280px;
  height: 170px;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgb(221, 221, 221);
  background: #fff;
}
.board-preview:hover {
  background: var(--light-gray);
  cursor: pointer;
}

.title {
  text-align: justify;
  padding-left: 30px;
  padding-right: 30px;
}
</style>

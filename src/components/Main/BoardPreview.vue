<template>
  <router-link to="/board/2">
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
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px rgb(221, 221, 221);
  background: #fff;
  font-size: 16px;
}
.board-preview:hover {
  background: var(--light-gray);
  cursor: pointer;
}

.title {
  text-align: justify;
  padding: 0;
}
</style>

<template>
  <h4 class="board-group-title">Мои доски</h4>
  <ul class="board-list">
    <li class="board-item">
      <CreateBoard />
    </li>
    <li class="board-item" v-for="(item, index) in items" :key="index">
      <BoardPreview />
    </li>
  </ul>
  <h4 class="board-group-title">Все доски</h4>
  <ul class="board-list">
    <li class="board-item" v-for="(item, index) in items" :key="index">
      <BoardPreview />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BoardPreview from './BoardPreview.vue'
import CreateBoard from './CreateBoard.vue'

export default defineComponent({
  components: {
    BoardPreview,
    CreateBoard
  },

  setup() {
    return {
      items: [
        1, 2, 3, 3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3
      ]
    }
  }
})
</script>

<style scoped>
.board-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin-bottom: 40px;
}

@media (max-width: 1350px) {
  .board-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 1060px) {
  .board-list {
    grid-template-columns: 1fr;
    margin-left: 100px;
    margin-right: 100px;
  }
}
.board-item {
  display: grid;
}

.board-group-title {
  margin: 0;
  padding: 0;
  margin-bottom: 25px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
</style>

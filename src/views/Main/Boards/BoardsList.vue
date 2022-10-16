<template>
  <h4 class="board-group-title">{{ listTitle }}</h4>
  <ul class="board-list">
    <li v-if="isMyBoardsList" class="board-item">
      <CreateBoard />
    </li>
    <li class="board-item" v-for="(item, index) in boardsList" :key="index">
      <BoardPreview />
    </li>
  </ul>
</template>

<script lang="ts">
import { IBoard } from '@/types/IBoard'
import { defineComponent, PropType } from 'vue'
import BoardPreview from './BoardPreview.vue'
import CreateBoard from './CreateBoard.vue'

export default defineComponent({
  props: {
    listTitle: {
      type: String,
      required: true
    },
    isMyBoardsList: {
      type: Boolean,
      required: true
    },
    boardsList: {
      type: Array as PropType<IBoard[]>,
      required: true
    }
  },

  components: {
    BoardPreview,
    CreateBoard
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.board-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin-bottom: 16px;
}

@media (max-width: 1940px) {
  .board-list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media (max-width: 1650px) {
  .board-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 1350px) {
  .board-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 1070px) {
  .board-list {
    grid-template-columns: 1fr;
  }
}
.board-item {
  display: grid;
}

.board-group-title {
  margin: 0;
  padding: 0;
  font-size: 28px;
  margin-bottom: 22px;
  font-weight: bold;
  text-align: center;
}
</style>

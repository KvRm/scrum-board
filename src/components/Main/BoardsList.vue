<template>
  <h4 class="board-group-title">{{ listTitle }}</h4>
  <ul class="board-list">
    <li v-if="isMyBoardsList" class="board-item">
      <div class="create-board">
        <img src="@/assets/icons/plus.svg" alt="" srcset="" />
      </div>
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
    BoardPreview
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

.create-board {
  display: grid;
  justify-content: center;
  align-items: center;
  min-width: 280px;
  height: 170px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0 0 10px rgb(221, 221, 221);
  background: #fff;
}
.create-board:hover {
  background: var(--light-gray);
  cursor: pointer;
  color: lightgray;
}

.create-board img {
  width: 130px;
  height: 130px;
  transition: all 0.2s ease;
}
</style>

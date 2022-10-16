<template>
  <div class="main-wrapper container">
    <aside class="aside-container">
      <HistoryComponent />
    </aside>
    <main class="main-container">
      <div class="board-list">
        <BoardsList
          :listTitle="'Мои доски'"
          :boardsList="boardsList"
          :isMyBoardsList="true"
        />
      </div>
      <div class="board-list">
        <BoardsList
          :listTitle="'Все доски'"
          :boardsList="boardsList"
          :isMyBoardsList="false"
        />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HistoryComponent from './HistoryComponent.vue'
import BoardsList from './Boards/BoardsList.vue'
import { IBoard } from '@/types'

export default defineComponent({
  components: {
    HistoryComponent,
    BoardsList
  },

  setup() {
    const boardsList = ref<IBoard[]>([
      {
        boardTitle: 'Тестовая доска',
        boardLink: '/board'
      },
      {
        boardTitle: 'Тестовая доска',
        boardLink: '/board'
      },
      {
        boardTitle: 'Тестовая доска',
        boardLink: '/board'
      },
      {
        boardTitle: 'Тестовая доска',
        boardLink: '/board'
      },
      {
        boardTitle: 'Тестовая доска',
        boardLink: '/board'
      },
      {
        boardTitle: 'Тестовая доска',
        boardLink: '/board'
      },
      {
        boardTitle: 'Тестовая доска',
        boardLink: '/board'
      }
    ])

    return {
      boardsList
    }
  }
})
</script>

<style scoped>
@media (max-width: 2000px) {
  .main-wrapper {
    display: grid;
    gap: 15px;
  }

  .aside-container {
    display: inline-grid;
    position: fixed;
  }

  .main-container {
    display: inline-grid;
    margin-left: 415px;
  }
}

@media (max-width: 780px) {
  .aside-container {
    position: relative;
  }
  .main-container {
    margin-left: 0;
  }
}
</style>

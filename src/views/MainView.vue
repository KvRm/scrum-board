<template>
  <div class="main-wrapper container">
    <aside class="aside-container">
      <HistoryComponent />
    </aside>
    <main class="main-container">
      <div class="board-list">
        <BoardsList :listTitle="'Мои доски'" :isMyBoardsList="true" />
      </div>
      <div class="board-list">
        <BoardsList :listTitle="'Все доски'" :isMyBoardsList="false" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HistoryComponent from '@/components/Main/HistoryComponent.vue'
import BoardsList from '@/components/Main/BoardsList.vue'

export default defineComponent({
  components: {
    HistoryComponent,
    BoardsList
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
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

@media (max-width: 780px) {
  .main-wrapper {
    display: block;
  }

  .aside-container {
    display: inherit;
    position: inherit;
  }

  .main-container {
    display: inherit;
    margin-left: inherit;
  }
}
</style>

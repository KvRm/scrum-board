<template>
  <div class="container">
    <aside class="aside-container">
      <HistoryComponent />
    </aside>
    <main class="main-container">
      <BoardList />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HistoryComponent from './HistoryComponent.vue'
import BoardList from './Boards/BoardsList.vue'

export default defineComponent({
  components: {
    HistoryComponent,
    BoardList
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
}

.aside-container {
  display: inline-grid;
  height: 100%;
}

.main-container {
  display: inline-grid;
}
</style>

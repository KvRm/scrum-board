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
.aside-container {
  height: 100%;
}
</style>

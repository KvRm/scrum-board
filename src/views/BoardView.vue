<template>
  <div class="board">
    <BoardHeader :boardName="boardName" />
    <SectionsContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionsContainer from '@/views/Board/Section/SectionsContainer.vue'
import BoardHeader from './Board/BoardHeader.vue'

export default defineComponent({
  name: 'HomeView',
  components: { SectionsContainer, BoardHeader },

  setup() {
    return {
      // валидация, макс длина 50 символов
      boardName: 'Тестовая доска'
    }
  }
})
</script>

<style scoped>
.title {
  justify-self: center;
  text-align: center;
  font-weight: bold;
  margin: 0;
  max-width: 800px;
  font-size: 24px;
}
</style>

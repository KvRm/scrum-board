<template>
  <div class="board">
    <BoardHeader />
    <SectionsContainer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionsContainer from '@/components/Board/SectionsContainer.vue'
import BoardHeader from '@/components/Board/BoardHeader.vue'

export default defineComponent({
  name: 'HomeView',
  components: { SectionsContainer, BoardHeader }
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

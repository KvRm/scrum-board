<template>
  <section class="section">
    <p class="title">Название секции</p>
    <TaskList />
  </section>
</template>

<script lang="ts">
import { TaskCriticalLvl } from '@/types'
import { defineComponent } from 'vue'
import TaskList from './TaskList.vue'

export default defineComponent({
  components: { TaskList },

  setup() {
    return { TaskCriticalLvl }
  }
})
</script>

<style scoped>
.section {
  display: grid;
  align-content: flex-start;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px lightgray;
  background: var(--light-gray);
}

.title {
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  margin-bottom: 14px;
}
</style>

<template>
  <section class="section">
    <p class="title">{{ title }}</p>
    <TaskList :taskList="currentTaskList" />
    <span class="add-button">+ Добавить</span>
  </section>
</template>

<script lang="ts">
import { TaskCriticalLvl, ITaskPreview } from '@/types'
import { defineComponent, PropType } from 'vue'
import TaskList from './Task/TaskList.vue'

export default defineComponent({
  components: { TaskList },
  props: {
    title: {
      type: String,
      required: true
    },
    currentTaskList: {
      type: Array as PropType<ITaskPreview[]>
    }
  },

  setup() {
    return { TaskCriticalLvl }
  }
})
</script>

<style scoped>
.section {
  display: grid;
  align-content: flex-start;
  gap: 10px;
  padding: 10px;
  margin: 5px 0;
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

.add-button {
  justify-self: center;
  display: inline-block;
  cursor: pointer;
}

.add-button:hover {
  text-decoration: underline;
}
</style>

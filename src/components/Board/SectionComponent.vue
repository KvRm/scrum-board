<template>
  <section class="section">
    <p class="title">{{ title }}</p>
    <TaskList :taskList="currentTaskList" />
  </section>
</template>

<script lang="ts">
import { TaskCriticalLvl, ITaskPreview } from '@/types'
import { defineComponent, PropType } from 'vue'
import TaskList from './TaskList.vue'

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

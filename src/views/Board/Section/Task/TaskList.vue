<template>
  <!-- index === id, при подключении бд -->
  <div class="task-list">
    <TaskPreview
      v-for="(task, index) in taskList"
      :key="index"
      :title="task.title"
      :shortDescription="task.shortDescription"
      :link="task.link"
      :criticalLvl="task.criticalLvl"
      :completeDate="task.completeDate"
      :author="task.author"
      :executor="task.executor"
    />
    <span class="add-button">+ Добавить</span>
  </div>
</template>

<script lang="ts">
import { ITaskPreview, TaskCriticalLvl } from '@/types'
import { defineComponent, PropType } from 'vue'
import TaskPreview from './TaskPreview.vue'

export default defineComponent({
  components: {
    TaskPreview
  },
  props: {
    taskList: Array as PropType<ITaskPreview[]>
  },

  setup() {
    return {
      TaskCriticalLvl
    }
  }
})
</script>

<style scoped>
.task-list {
  display: grid;
  row-gap: 10px;
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

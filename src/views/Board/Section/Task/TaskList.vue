<template>
  <!-- index === id, при подключении бд -->
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

<style scoped></style>

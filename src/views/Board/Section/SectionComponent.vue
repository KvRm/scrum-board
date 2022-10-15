<template>
  <section class="section">
    <div class="section-info">
      <p class="title">
        {{ title }}
        <slot name="add-task"></slot>
      </p>
    </div>
    <TaskList :taskList="currentTaskList" />
  </section>
</template>

<script lang="ts">
import { TaskCriticalLvl, TaskPreviewProps } from '@/types'
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
      type: Array as PropType<TaskPreviewProps[]>
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
  justify-content: center;
  gap: 20px;
  padding: 0 10px;
  border-radius: 10px;
}

.section-info {
  text-align: center;
  margin-bottom: 10px;
}

.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-top: 20px;
  margin-bottom: 0px;
}
</style>

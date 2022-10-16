<template>
  <ul class="my-task-list">
    <li class="my-task-item" v-for="(task, index) in myTasksList" :key="index">
      <MyTask
        :title="task.title"
        :boardName="task.board.boardTitle"
        :boardLink="task.board.boardLink"
        :criticalLvl="task.criticalLvl"
        :completeDate="task.completeDate"
        :author="task.author"
        :link="task.link"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { IMyTask } from '@/types'
import { defineComponent, PropType } from 'vue'
import MyTask from './MyTaskItem.vue'

export default defineComponent({
  components: {
    MyTask
  },

  props: {
    myTasksList: {
      type: Array as PropType<IMyTask[]>
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.my-task-item:nth-child(2n + 1) {
  background: var(--light-gray);
}
</style>

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
        :statusSectionTitle="task.statusSectionTitle"
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
.my-task-item {
  border-bottom: 1px solid lightgray;
}

.my-task-item:hover {
  background: var(--light-gray);
}

.my-task-item:nth-last-child(1) {
  border-bottom: none;
}
</style>

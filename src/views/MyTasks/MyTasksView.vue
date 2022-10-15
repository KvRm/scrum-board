<template>
  <div class="container">
    <div class="my-tasks">
      <MyTasksHeader />
      <MyTasksList :myTasksList="myTasksList" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyTasksHeader from './MyTasksHeader.vue'
import MyTasksList from './MyTask/MyTasksList.vue'
import { IMyTask, TaskCriticalLvl } from '@/types'

export default defineComponent({
  components: {
    MyTasksHeader,
    MyTasksList
  },

  setup() {
    const myTasksList = ref<IMyTask[]>([
      {
        title: 'Моя задача',
        boardName: 'Тестовая доска',
        boardLink: 'rustam/test-board',
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Автор',
        link: '2'
      },
      {
        title: 'Моя задача',
        boardName: 'Тестовая доска',
        boardLink: 'rustam/test-board',
        criticalLvl: TaskCriticalLvl.high,
        completeDate: '31.10.2022',
        author: 'Автор',
        link: '2'
      },
      {
        title: 'Моя задача',
        boardName: 'Тестовая доска',
        boardLink: 'rustam/test-board',
        criticalLvl: TaskCriticalLvl.medium,
        completeDate: '31.10.2022',
        author: 'Автор',
        link: '2'
      }
    ])

    return {
      myTasksList
    }
  }
})
</script>

<style scoped></style>

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
import MyTasksHeader from './MyTasks/MyTasksHeader.vue'
import MyTasksList from './MyTasks/MyTasksList.vue'
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
        board: {
          boardTitle: 'Тестовая доска',
          boardLink: '/board'
        },
        tags: ['Спринт 1'],
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Автор',
        link: '2',
        statusSectionTitle: 'Нерешенные'
      },
      {
        title: 'Моя задача',
        board: {
          boardTitle: 'Тестовая доска',
          boardLink: '/board'
        },
        tags: ['Спринт 1'],
        criticalLvl: TaskCriticalLvl.high,
        completeDate: '31.10.2022',
        author: 'Автор',
        link: '2',
        statusSectionTitle: 'Нерешенные'
      },
      {
        title: 'Моя задача',
        board: {
          boardTitle: 'Тестовая доска',
          boardLink: '/board'
        },
        tags: ['Спринт 1'],
        criticalLvl: TaskCriticalLvl.medium,
        completeDate: '31.10.2022',
        author: 'Автор',
        link: '2',
        statusSectionTitle: 'Нерешенные'
      }
    ])

    return {
      myTasksList
    }
  }
})
</script>

<style scoped></style>

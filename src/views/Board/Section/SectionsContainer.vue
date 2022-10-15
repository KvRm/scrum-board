<template>
  <div class="sections-container">
    <SectionComponent
      :title="'Нерешенные'"
      :currentTaskList="currentTaskList"
    />
    <SectionComponent :title="'В работе'" :currentTaskList="currentTaskList2" />
    <SectionComponent :title="'Решенные'" :currentTaskList="currentTaskList3" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionComponent from '@/views/Board/Section/SectionComponent.vue'
import { ITaskPreview } from '@/types'

export default defineComponent({
  components: { SectionComponent },

  setup() {
    function logText() {
      console.log('Нерешенные')
    }
    const currentTaskList: ITaskPreview[] = [
      {
        title: 'Название задачи',
        link: '2'
      },
      {
        title: 'Название задачи',
        link: '2'
      },
      {
        title: 'Название задачи',
        link: '2'
      },
      {
        title: 'Название задачи',
        link: '2'
      }
    ]
    const currentTaskList2: ITaskPreview[] = [
      {
        title: 'Название задачи',
        link: '2'
      },
      {
        title: 'Название задачи',
        link: '2'
      }
    ]
    const currentTaskList3: ITaskPreview[] = [
      {
        title: 'Название задачи',
        link: '2'
      }
    ]
    return {
      logText,
      currentTaskList,
      currentTaskList2,
      currentTaskList3
    }
  }
})
</script>

<style scoped>
.sections-container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: flex-start;
  column-gap: 20px;
  min-height: calc(100vh - 60px);
  margin-top: 20px;
  padding: 0px 16px;
  overflow-x: scroll;
}
</style>

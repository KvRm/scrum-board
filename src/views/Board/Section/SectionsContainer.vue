<template>
  <div class="sections-container">
    <SectionComponent :title="'Нерешенные'" :currentTaskList="currentTaskList">
      <template #add-task>
        <span
          class="add-task"
          data-tooltip-content="Добавить задачу"
          @click="logText"
        >
          <img class="add-task-img" src="@/assets/icons/plus-circle.svg" alt="+" />
        </span>
      </template>
    </SectionComponent>
    <SectionComponent :title="'В работе'" :currentTaskList="currentTaskList2">
      <template #add-task>
        <span
          class="add-task"
          data-tooltip-content="Добавить задачу"
          @click="logText"
        >
          <img class="add-task-img" src="@/assets/icons/plus-circle.svg" alt="+" />
        </span>
      </template>
    </SectionComponent>
    <SectionComponent :title="'Решенные'" :currentTaskList="currentTaskList3">
      <template #add-task>
        <span
          class="add-task"
          data-tooltip-content="Добавить задачу"
          @click="logText"
        >
          <img class="add-task-img" src="@/assets/icons/plus-circle.svg" alt="+" />
        </span>
      </template>
    </SectionComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionComponent from '@/views/Board/Section/SectionComponent.vue'
import { TaskCriticalLvl, TaskPreviewProps } from '@/types'

export default defineComponent({
  components: { SectionComponent },

  setup() {
    function logText() {
      console.log('Нерешенные')
    }
    const currentTaskList: TaskPreviewProps[] = [
      {
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Rustam'
      },
      {
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Rustam'
      },
      {
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Rustam'
      }
    ]
    const currentTaskList2: TaskPreviewProps[] = [
      {
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Rustam'
      },
      {
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Rustam'
      }
    ]
    const currentTaskList3: TaskPreviewProps[] = [
      {
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Rustam'
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
  overflow-x: scroll;
  gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  min-height: 100vh;
  padding: 0px 10px;
}

.add-task {
  position: relative;
  text-align: center;
  transition: all 0.5s ease;
  cursor: pointer;
}
.add-task::after {
  content: attr(data-tooltip-content);
  padding: 8px;
  border-radius: 4px;
  position: absolute;
  z-index: 1000;
  color: white;
  bottom: 115%;
  right: 50%;
  left: 50%;
  width: max-content;
  background-color: var(--black);
  opacity: 0;
  font-size: 0.8rem;
  visibility: hidden;
  transform: translate(-50%, 18px) scale(0.8);
  transition: visibility, opacity, transform 200ms;
}

.add-task:hover::after {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0);
}
.add-task-img {
  position: absolute;
  bottom: 0px;
  height: 25px;
  margin-left: 10px;
}
.add-task-img:hover {
  opacity: 0.6;
}
.title {
  display: grid;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>

<template>
  <div class="sections-container">
    <SectionComponent :title="'Нерешенные'" :currentTaskList="currentTaskList">
      <template #add-task>
        <span
          class="add-task"
          data-tooltip-content="Добавить задачу"
          @click="logText"
        >
          <img
            class="add-task-img"
            src="@/assets/icons/plus-circle.svg"
            alt="+"
          />
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
          <img
            class="add-task-img"
            src="@/assets/icons/plus-circle.svg"
            alt="+"
          />
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
          <img
            class="add-task-img"
            src="@/assets/icons/plus-circle.svg"
            alt="+"
          />
        </span>
      </template>
    </SectionComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionComponent from '@/views/Board/Section/SectionComponent.vue'
import { TaskCriticalLvl, ITaskPreview } from '@/types'

export default defineComponent({
  components: { SectionComponent },

  setup() {
    function logText() {
      console.log('Нерешенные')
    }
    const currentTaskList: ITaskPreview[] = [
      {
        title: 'Название задачи',
        shortDescription:
          'Описание тавоытиыф ыощаф аыощп аыотп ыщфовт фвыт ыфвщопт ыфощвтп ыщвофтп ыфощатп ыатп щфаыоп щфаыотп щфытп офаытпщ фаыоы',
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Автор',
        executor: 'Исполнитель',
        link: '2'
      },
      {
        title: 'Название задачи',
        shortDescription:
          'Описание тавоытиыф ыощаф аыощп аыотп ыщфовт фвыт ыфвщопт ыфощвтп ыщвофтп ыфощатп ыатп щфаыоп щфаыотп щфытп офаытпщ фаыоы',

        criticalLvl: TaskCriticalLvl.high,
        completeDate: '31.10.2022',
        author: 'Автор',
        executor: 'Исполнитель',
        link: '2'
      },
      {
        title: 'Название задачи',
        shortDescription:
          'Описание тавоытиыф ыощаф аыощп аыотп ыщфовт фвыт ыфвщопт ыфощвтп ыщвофтп ыфощатп ыатп щфаыоп щфаыотп щфытп офаытпщ фаыоы',

        criticalLvl: TaskCriticalLvl.medium,
        completeDate: '31.10.2022',
        author: 'Автор',
        executor: 'Исполнитель',
        link: '2'
      }
    ]
    const currentTaskList2: ITaskPreview[] = [
      {
        title: 'Название задачи',
        shortDescription:
          'Описание тавоытиыф ыощаф аыощп аыотп ыщфовт фвыт ыфвщопт ыфощвтп ыщвофтп ыфощатп ыатп щфаыоп щфаыотп щфытп офаытпщ фаыоы',

        criticalLvl: TaskCriticalLvl.low,
        completeDate: '31.10.2022',
        author: 'Автор',
        executor: 'Исполнитель',
        link: '2'
      },
      {
        title: 'Название задачи',
        shortDescription:
          'Описание тавоытиыф ыощаф аыощп аыотп ыщфовт фвыт ыфвщопт ыфощвтп ыщвофтп ыфощатп ыатп щфаыоп щфаыотп щфытп офаытпщ фаыоы',
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Автор',
        executor: 'Исполнитель',
        link: '2'
      }
    ]
    const currentTaskList3: ITaskPreview[] = [
      {
        title: 'Название задачи',
        shortDescription:
          'Описание тавоытиыф ыощаф аыощп аыотп ыщфовт фвыт ыфвщопт ыфощвтп ыщвофтп ыфощатп ыатп щфаыоп щфаыотп щфытп офаытпщ фаыоы',
        criticalLvl: TaskCriticalLvl.veryHigh,
        completeDate: '31.10.2022',
        author: 'Автор',
        executor: 'Исполнитель',
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
  overflow-x: scroll;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  min-height: 100vh;
  max-width: 1700px;
  margin: 0 auto;
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
  position: relative;
  bottom: -6px;
  height: 25px;
}

.add-task-img:hover {
  opacity: 0.6;
}

.title {
  display: grid;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>

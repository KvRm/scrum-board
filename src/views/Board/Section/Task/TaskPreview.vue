<template>
  <div class="task">
    <h5 class="title">Имя таски</h5>
    <p class="description">ОписаниеОписаниеОписаниеОписаниеОписание</p>
    <div class="task-state">
      <div class="additional-info">
        <p class="critical-lvl">
          Критичноcть:
          <span
            :class="{
              red: criticalLvl === 'Очень высокая',
              orange: criticalLvl === 'Высокая',
              blue: criticalLvl === 'Средняя',
              green: criticalLvl === 'Низкая'
            }"
          >
            {{ criticalLvl }}
          </span>
        </p>
        <p class="complete-time">
          Крайний срок:
          <span>{{ completeDate }}</span>
        </p>
        <router-link to="task/:id">
          <span class="task-link">К таске -></span>
        </router-link>
      </div>
      <div class="author">
        Автор: <span>{{ author }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TaskCriticalLvl } from '@/types'
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  props: {
    criticalLvl: {
      type: String as PropType<TaskCriticalLvl>,
      required: true
    },
    // add vuelidate
    completeDate: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  setup() {
    const isTaskRelevant = ref<boolean>(true)

    return { isTaskRelevant }
  }
})
</script>

<style scoped>
.task {
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 2px solid var(--gray);
  min-width: 300px;
  max-height: 400px;
  border-radius: 5px;
  background: #fff;
  padding: 0px 8px 8px 8px;
  line-height: 14px;
  font-size: 14px;
}

.title {
  justify-self: center;
  font-size: 20px;
  line-height: 0;
  padding: 0;
}
.task-state {
  display: grid;
}
.author {
  justify-self: flex-end;
  align-self: flex-end;
}
.description {
  font-weight: 300;
  line-height: 24px;
  overflow-x: scroll;
  padding: 0;
  margin: 0;
}
.complete-time span,
.author span {
  font-weight: bold;
}
.task-link {
  color: rgb(0, 76, 255);
}
.red {
  color: rgb(175, 0, 0);
}
.orange {
  color: rgb(185, 80, 0);
}
.blue {
  color: blue;
}
.green {
  color: var(--green);
}
</style>

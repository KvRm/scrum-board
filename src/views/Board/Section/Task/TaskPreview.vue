<template>
  <div class="task">
    <h5 class="title">Имя таски</h5>
    <p class="description">
      fnsdfndsjnj sn sa sa sa sa sa sa asj sngsfj dgndfsj gndfjg ndfsjg
      ndfsjgndfsj ndfsjg ndfsj ngefj gndfsj gns fnsdfndsjnj sn sa sa sa sa sa sa
      asj sngsfj dgndfsj gndfjg ndfsjg ndfsjgndfsj ndfsjg ndfsj ngefj gndfsj gns
    </p>
    <div class="task-state">
      <div class="additional-info">
        <p class="complete-time">
          Крайний срок:
          <span>{{ completeDate }}</span>
        </p>
        <p class="critical-lvl">
          Критичность:
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
        <p class="author">
          Автор:
          <span>{{ author ? author : 'Не назначен' }}</span>
        </p>
        <p class="executor">
          Исполнитель:
          <span>{{ executor ? executor : 'Не назначен' }}</span>
        </p>
      </div>
      <router-link class="task-link" to="task/:id">
        <span>Подробнее...</span>
      </router-link>
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
    },
    executor: {
      type: String
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
  width: 450px;
  border-radius: 10px;
  background: #fff;
  padding: 0px 22px 14px 22px;
  line-height: 14px;
  font-size: 16px;
  box-shadow: 0 0 15px rgb(221, 221, 221);
  overflow: hidden;
}

.title {
  justify-self: center;
  font-size: 20px;
  line-height: 0;
  padding: 0;
  margin-top: 34px;
  margin-bottom: 20px;
}
.task-state {
  display: grid;
  grid-template-columns: 1fr auto;
}
.author {
  justify-self: flex-end;
  align-self: flex-end;
}
.description {
  font-weight: 300;
  line-height: 22px;
  box-sizing: border-box;
  text-align: justify;
  padding: 0;
  margin: 0;
}
.additional-info {
  margin-top: 6px;
  line-height: 7px;
}

.complete-time span,
.author span,
.critical-lvl span,
.executor span {
  font-weight: bold;
}
.task-link {
  color: rgb(0, 0, 200);
  display: inline-grid;
  align-self: flex-end;
  padding-bottom: 12px;
}
.red {
  color: rgba(255, 59, 59);
}
.orange {
  color: rgba(255, 101, 12);
}
.blue {
  color: rgba(0, 0, 255);
}
.green {
  color: rgba(0, 115, 90);
}
</style>

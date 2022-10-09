<template>
  <div
    class="task"
    :class="{
      notRelevant: isTaskRelevant === false,
    }"
  >
    <h5 class="title">Имя таски</h5>
    <p class="description">
      ОписаниеОписаниеОписание Оп и с а ни е О п и с а н и е О п и са н и е О п
      и са н и е О пи с а ни е a sd s g f hd d
      fsgdfsfdsgfsdgfsgsfagsfdgfsgsagadsgasg
      ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание
    </p>
    <div class="additional-info">
      <p class="critical-lvl">
        Критичноcть:
        <span
          :class="{
            red: criticalLvl === 'Очень высокая',
            orange: criticalLvl === 'Высокая',
            blue: criticalLvl === 'Средняя',
            green: criticalLvl === 'Низкая',
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
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { defineComponent, onMounted, PropType, ref } from "vue";

export enum TaskCriticalLvl {
  veryHigh = "Очень высокая",
  high = "Высокая",
  medium = "Средняя",
  low = "Низкая",
}

export default defineComponent({
  props: {
    criticalLvl: {
      type: String as PropType<TaskCriticalLvl>,
      required: true,
    },
    // add vuelidate
    completeDate: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isTaskRelevant = ref<boolean>(true);

    onMounted(() => {
      const currentYear: number = +moment().format("YYYY");
      const currentMonth: number = +moment().format("MM");
      const currentDay: number = +moment().format("DD");

      const completeYear: number = +props.completeDate.slice(6, 10);
      const completeMonth: number = +props.completeDate.slice(3, 5);
      const completeDay: number = +props.completeDate.slice(0, 2);

      isTaskRelevant.value = getTaskRelevantStatus();
      console.log(isTaskRelevant.value);

      function getTaskRelevantStatus(): boolean {
        if (currentYear > completeYear) return false;
        if (currentMonth > completeMonth) return false;
        if (currentDay > completeDay) return false;
        return true;
      }
    });

    return { isTaskRelevant };
  },
});
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

.description {
  font-weight: 300;
  line-height: 24px;
  overflow-x: scroll;
  padding: 0;
  margin: 0;
}
.complete-time span {
  font-weight: bold;
}

.notRelevant {
  background: rgba(255, 43, 43, 0.2);
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

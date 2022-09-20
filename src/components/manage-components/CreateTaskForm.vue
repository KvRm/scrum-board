<template>
  <div class="task-info">
    <input-component :title="'Название задачи'" />
    <select-component :title="'Приоритет'" :selectList="list" />
    <select-component :title="'Столбец'" />
    <calendar-component :title="'Крайний срок выполнения задачи'" />
  </div>
  <task-template
    :title="title"
    :criticalLvl="criticalLvl"
    :timeToComplete="timeToComplete"
    :section="section"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TaskTemplate from "./TaskTemplate.vue";
import CalendarComponent from "../UI/CalendarComponent.vue";
import InputComponent from "../UI/InputComponent.vue";
import SelectComponent from "../UI/SelectComponent.vue";

export default defineComponent({
  components: {
    CalendarComponent,
    SelectComponent,
    InputComponent,
    TaskTemplate,
  },
  setup() {
    const title = ref<string>("Таски по скрам доске");
    const criticalLvl = ref<string>("Высокий");
    const timeToComplete = ref<string>("2022-10-10");
    const section = ref<string>("Первая секция");

    return {
      list: ["a", "b", "c"],
      title,
      criticalLvl,
      timeToComplete,
      section,
    };
  },
});
</script>

<style scoped>
.task-info {
  display: inline-grid;
}
</style>

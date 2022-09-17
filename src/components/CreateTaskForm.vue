<template>
  <form class="task-info" action="submit">
    <input-component :title="'Название задачи'" />
    <select-component :title="'Критичность'" :selectList="list" />
    <select-component :title="'Столбец'" />
    <calendar-component :title="'Крайний срок выполнения задачи'" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalendarComponent from "./UI/CalendarComponent.vue";
import InputComponent from "./UI/InputComponent.vue";
import SelectComponent from "./UI/SelectComponent.vue";

export default defineComponent({
  components: {
    CalendarComponent,
    SelectComponent,
    InputComponent,
  },
  setup() {
    return {
      list: ["a", "b", "c"],
    };
  },
});
</script>

<style scoped>
.task-info {
  display: inline-grid;
}
</style>

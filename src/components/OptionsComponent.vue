<template>
  <div class="container">
    <div class="create-elem-container">
      <div class="choose-container">
        <button-component :color="ButtonColor.blue" :size="ButtonSize.medium">
          Создать столбец
        </button-component>
        <button-component :color="ButtonColor.blue" :size="ButtonSize.medium">
          Добавить задачу
        </button-component>
      </div>
      <create-task-form />
      <task-template
        :title="title"
        :criticalLvl="criticalLvl"
        :timeToComplete="timeToComplete"
        :section="section"
      />
    </div>
    <button-component
      class="create-btn"
      :color="ButtonColor.primary"
      :size="ButtonSize.large"
    >
      Создать
    </button-component>
    <search-filter-component />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonComponent, {
  ButtonColor,
  ButtonSize,
} from "@/components/UI/ButtonComponent.vue";
import CreateTaskForm from "@/components/CreateTaskForm.vue";
import SearchFilterComponent from "@/components/SearchFilterComponent.vue";
import TaskTemplate from "./TaskTemplate.vue";

export default defineComponent({
  components: {
    ButtonComponent,
    CreateTaskForm,
    SearchFilterComponent,
    TaskTemplate,
  },

  setup() {
    const title = ref<string>("Таски по скрам доске");
    const criticalLvl = ref<string>("Высокий");
    const timeToComplete = ref<string>("2022-10-10");
    const section = ref<string>("Первая секция");

    return {
      ButtonColor,
      ButtonSize,
      title,
      criticalLvl,
      timeToComplete,
      section,
    };
  },
});
</script>

<style scoped>
.container {
  display: grid;
}

.create-elem-container {
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: flex-start;
  gap: 50px;

  padding: 20px 0;
  width: 100%;
  height: 300px;
}

.choose-container {
  display: inline-grid;
  gap: 10px;
  margin-top: 10px;
}

.create-btn {
  align-self: flex-end;
  justify-self: center;
}
</style>

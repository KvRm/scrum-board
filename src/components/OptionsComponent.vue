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
      <div>Тут пример компонента</div>
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
import { defineComponent } from "vue";
import ButtonComponent, {
  ButtonColor,
  ButtonSize,
} from "@/components/UI/ButtonComponent.vue";
import CreateTaskForm from "@/components/CreateTaskForm.vue";
import SearchFilterComponent from "@/components/SearchFilterComponent.vue";

export default defineComponent({
  components: { ButtonComponent, CreateTaskForm, SearchFilterComponent },

  setup() {
    return { ButtonColor, ButtonSize };
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
  height: 200px;
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

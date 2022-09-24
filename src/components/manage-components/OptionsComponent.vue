<template>
  <div class="container">
    <div class="create-elem-container">
      <div class="choose-container">
        <button-component
          :color="ButtonColor.green"
          :size="ButtonSize.medium"
          @click="changeCreateState('column')"
        >
          Редактировать столбцы
        </button-component>
        <button-component
          :color="ButtonColor.green"
          :size="ButtonSize.medium"
          @click="changeCreateState('task')"
        >
          Добавить задачу
        </button-component>
      </div>
      <create-task-form v-if="createState === 'task'" />
      <create-column-form v-if="createState === 'column'" />
    </div>
    <div class="utils">
      <search-filter-component />
      <button-component
        class="create-btn"
        :color="ButtonColor.primary"
        :size="ButtonSize.large"
      >
        Сохранить
      </button-component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonComponent, {
  ButtonColor,
  ButtonSize,
} from "@/components/UI/ButtonComponent.vue";
import CreateTaskForm from "@/components/manage-components/CreateTaskForm.vue";
import SearchFilterComponent from "@/components/manage-components/SearchFilterComponent.vue";
import CreateColumnForm from "./EditColumn.vue";

type createStateTypes = "task" | "column";

export default defineComponent({
  components: {
    ButtonComponent,
    CreateTaskForm,
    SearchFilterComponent,
    CreateColumnForm,
  },

  setup() {
    const createState = ref<createStateTypes>("column");

    const changeCreateState = (newState: createStateTypes) => {
      createState.value = newState;
    };

    return {
      ButtonColor,
      ButtonSize,
      createState,
      changeCreateState,
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

.utils {
  display: grid;
  grid-template-columns: 1fr auto;
}
</style>

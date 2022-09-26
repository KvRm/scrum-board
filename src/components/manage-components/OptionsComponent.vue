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
      <create-task-form v-if="optionsState.createState === 'task'" />
      <create-column-form v-if="optionsState.createState === 'column'" />
    </div>
    <div class="utils">
      <button-component
        class="create-btn"
        :color="ButtonColor.primary"
        :size="ButtonSize.large"
      >
        {{ optionsState.primaryButtonText }}
      </button-component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import ButtonComponent, {
  ButtonColor,
  ButtonSize,
} from "@/components/UI/ButtonUI.vue";
import CreateTaskForm from "@/components/manage-components/CreateTaskForm.vue";
import CreateColumnForm from "./EditColumn.vue";

interface IOptionsState {
  createState: "task" | "column";
  primaryButtonText: "Сохранить" | "Добавить";
}

export default defineComponent({
  components: {
    ButtonComponent,
    CreateTaskForm,
    CreateColumnForm,
  },

  setup() {
    const optionsState = reactive<IOptionsState>({
      createState: "column",
      primaryButtonText: "Сохранить",
    });

    const changeCreateState = (newState: "task" | "column") => {
      optionsState.createState = newState;
      if (newState === "task") optionsState.primaryButtonText = "Добавить";
      else if (newState === "column")
        optionsState.primaryButtonText = "Сохранить";
    };

    return {
      optionsState,
      ButtonColor,
      ButtonSize,
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

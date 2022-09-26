<template>
  <div class="edit-column">
    <select-component :title="'Столбец'" />
    <button-component :color="ButtonColor.green" :size="ButtonSize.small">
      Новый стобец
    </button-component>
  </div>
  <selected-column-form />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent, { ButtonColor, ButtonSize } from "../UI/ButtonUI.vue";
import SelectComponent from "../UI/SelectUI.vue";
import SelectedColumnForm from "./SelectedColumnForm.vue";

export default defineComponent({
  components: {
    SelectComponent,
    ButtonComponent,
    SelectedColumnForm,
  },
  setup() {
    const columns = [
      {
        name: "sprint 1",
        description: "1. Vuex, 2. Vue router",
        priority: "Средний",
      },
    ];
    return {
      ButtonColor,
      ButtonSize,
      columns,
    };
  },
});
</script>

<style scoped>
.edit-column {
  display: inline-grid;
}
</style>

<template>
  <div class="selected-column">
    <input-component :title="'Название'" />
    <select-component :title="'Очередность'" />
    <textarea-component :title="'Описание столбца'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonComponent, {
  ButtonColor,
  ButtonSize,
} from "../UI/ButtonComponent.vue";
import InputComponent from "../UI/InputComponent.vue";
import SelectComponent from "../UI/SelectComponent.vue";
import TextareaComponent from "../UI/TextareaComponent.vue";

export default defineComponent({
  components: {
    InputComponent,
    SelectComponent,
    TextareaComponent,
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
.selected-column {
  display: grid;
}
</style>

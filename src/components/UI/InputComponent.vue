<template>
  <div class="input-container">
    <label>{{ title }}</label>
    <input class="input" type="text" placeholder="Введите текст" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.input-container {
  display: inline-grid;
  margin-bottom: 10px;
}

.input {
  padding: 5px 10px;
  border: 2px solid var(--gray);
  border-radius: 4px;
  min-width: 300px;
  height: 35px;
}
.input:focus {
  border: 2px solid var(--black);
}

label {
  font-size: 14px;
  padding-left: 2px;
}
</style>

<template>
  <div class="select-container">
    <label>{{ title }}</label>
    <input type="select" />
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
.select-container {
  display: inline-grid;
  margin-bottom: 10px;
}

.select {
  padding: 5px 10px;
  border: 2px solid var(--gray);
  border-radius: 4px;
  min-width: 300px;
  height: 35px;
}
</style>

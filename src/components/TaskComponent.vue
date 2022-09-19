<template>
  <div class="task"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.task {
  border: 2px solid var(--gray);
  width: 300px;
  height: 200px;
  border-radius: 5px;
  background: #fff;
}
</style>

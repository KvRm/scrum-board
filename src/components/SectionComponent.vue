<template>
  <section class="section"></section>
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
.section {
  display: grid;
  min-height: 100vh;
  min-width: 300px;
  border-right: 1px solid var(--gray);
  border-left: 1px solid var(--gray);
  border-top: 1px solid var(--gray);
  gap: 5px;
}
</style>

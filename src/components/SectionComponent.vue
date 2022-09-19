<template>
  <section class="section">
    <task-component />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskComponent from "./TaskComponent.vue";

export default defineComponent({
  components: { TaskComponent },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.section {
  display: grid;
  justify-content: space-around;
  min-width: 310px;
  gap: 5px;
}
</style>

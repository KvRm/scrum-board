<template>
  <section class="section">
    <task-component />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskComponent from "./TaskPreview.vue";

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
}
</style>

<template>
  <section class="section">
    <div class="section-info">
      <p class="title">Task Name</p>
      <p class="description">Описание столбца</p>
    </div>
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
  align-content: flex-start;
}

.title {
  display: grid;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
}
.description {
  font-size: 14px;
  padding: 0 5px;
  margin-top: 0;
  opacity: 0.95;
}
</style>

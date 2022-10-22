<template>
  <div class="task-list">
    <TaskPreview />
    <span class="add-button">+ Добавить</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskPreview from './TaskPreview.vue'

export default defineComponent({
  components: {
    TaskPreview
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.task-list {
  display: grid;
  row-gap: 10px;
}

.add-button {
  justify-self: center;
  display: inline-block;
  cursor: pointer;
}

.add-button:hover {
  text-decoration: underline;
}
</style>

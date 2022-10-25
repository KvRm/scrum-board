<template>
  <div class="task-container">
    <TaskComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskComponent from '@/components/Task/TaskComponent.vue'

export default defineComponent({
  components: { TaskComponent }
})
</script>

<style scoped>
.task-container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
  font-size: 16px;
}
</style>

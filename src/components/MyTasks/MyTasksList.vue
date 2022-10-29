<template>
  <ul class="my-task-list">
    <li class="my-task-item" v-for="(task, index) in 10" :key="index">
      <MyTask />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyTask from './MyTaskItem.vue'

export default defineComponent({
  components: { MyTask }
})
</script>

<style scoped>
.my-task-item {
  border-bottom: 1px solid lightgray;
}

.my-task-item:hover {
  background: var(--light-gray);
}

.my-task-item:nth-last-child(1) {
  border-bottom: none;
}
</style>

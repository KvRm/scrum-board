<template>
  <div class="task-list">
    <TaskComment
      v-for="(comment, index) in 3"
      :key="index"
      :comment="comment"
    />
  </div>
  <TaskAddComment />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskComment from './TaskComment.vue'
import TaskAddComment from './TaskAddComment.vue'

export default defineComponent({
  components: {
    TaskAddComment,
    TaskComment
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.task-list {
  display: grid;
  gap: 20px;
}
</style>

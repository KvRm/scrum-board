<template>
  <TaskComment
    v-for="(comment, index) in commentList"
    :key="index"
    :comment="comment"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskComment from './TaskComment.vue'

export default defineComponent({
  components: {
    TaskComment
  },

  setup() {
    return {
      commentList: [
        {
          id: 'sasasa',
          author: 'author',
          creatingTime: '21.21.21',
          text: 'sometext'
        }
      ]
    }
  }
})
</script>

<style scoped></style>

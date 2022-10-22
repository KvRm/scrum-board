<template>
  <div class="container">
    <div class="my-tasks">
      <MyTasksHeader />
      <MyTasksList />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyTasksHeader from '@/components/MyTasks/MyTasksHeader.vue'
import MyTasksList from '@/components/MyTasks/MyTasksList.vue'

export default defineComponent({
  components: {
    MyTasksHeader,
    MyTasksList
  },

  setup() {
    return {}
  }
})
</script>

<style scoped></style>

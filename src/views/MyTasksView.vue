<template>
  <div class="container">
    <MyTasksHeader />
    <MyTasksList />
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
  }
})
</script>

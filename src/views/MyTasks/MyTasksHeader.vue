<template>
  <div class="my-task-header">
    <span class="subhead">Название задачи</span>
    <span class="subhead">Доска</span>
    <span class="subhead">Критичность</span>
    <span class="subhead">Крайний срок</span>
    <span class="subhead">Автор</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
.my-task-header {
  display: grid;
  grid-template-columns: 3fr 3fr 2fr 2fr 2fr;
  gap: 10px;
  align-items: center;
  justify-items: center;
  min-height: 40px;
  border-bottom: 1px solid lightgray;
  font-size: 16px;
}
</style>

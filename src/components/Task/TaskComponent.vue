<template>
  <h2 class="title">Название задачи</h2>
  <div class="task-state">
    <div class="status">
      <p>Доска</p>
      <p>Статус</p>
      <p>Критичнсоть</p>
      <p>Крайний срок</p>
    </div>

    <div class="relations">
      <p>Автор</p>
      <p>Исполнитель</p>
    </div>
  </div>

  <div class="operating">
    <InputUI :title="'Тэги:'" />
    <TextareaUI :title="'Описание:'" />
    <div>
      Комментарии:
      <TaskCommentList />
    </div>
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
.title {
  margin: 0;
  text-align: center;
}

.task-state {
  display: grid;
  grid-template-columns: auto auto;
}

.relations {
  text-align: right;
}
</style>

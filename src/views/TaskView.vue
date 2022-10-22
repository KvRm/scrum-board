<template>
  <div class="task-container">
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
  </div>
</template>

<script lang="ts">
import InputUI from '@/components/UI/InputUI.vue'
import TextareaUI from '@/components/UI/TextareaUI.vue'
import TaskCommentList from '@/components/Task/TaskCommentList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { InputUI, TextareaUI, TaskCommentList },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.task-container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
  font-size: 16px;
}

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

.operating {
}
</style>

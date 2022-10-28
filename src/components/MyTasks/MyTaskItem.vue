<template>
  <div class="my-task">
    <span class="title">
      <router-link class="link" to="board/2/1"> Название задачи </router-link>
    </span>
    <span class="board">
      <router-link class="link" to="board/2"> Доска </router-link>
    </span>
    <span>Статус</span>
    <span
      class="criticalLvl"
      :class="{
        red: criticalLvl === 'Очень высокая',
        orange: criticalLvl === 'Высокая',
        blue: criticalLvl === 'Средняя',
        green: criticalLvl === 'Низкая'
      }"
    >
      Критичность
    </span>
    <span class="completeDate">Крайний срок</span>
    <span class="author">Автор</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.my-task {
  display: grid;
  grid-template-columns: 3fr 3fr 2fr 2fr 2fr 2fr;
  gap: 10px;
  align-items: center;
  justify-items: center;
  height: 40px;
}

.link:hover {
  color: rgb(30, 30, 255);
  text-decoration: underline;
}

.red {
  color: rgba(255, 59, 59);
}
.orange {
  color: rgba(255, 101, 12);
}
.blue {
  color: rgb(0, 0, 170);
}
.green {
  color: rgba(0, 115, 90);
}
</style>

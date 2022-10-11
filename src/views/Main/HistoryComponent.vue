<template>
  <div class="history">
    <h4 class="title">История</h4>
    <ul class="board-list">
      <li
        class="board-link"
        v-for="boardLink in boardLinks"
        :key="boardLink.link"
      >
        <router-link :to="boardLink.link">
          {{ boardLink.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export interface IBoardLink {
  name: string
  // validate "/*"
  link: string
}

export default defineComponent({
  setup() {
    // Нужно получить только 18 компонентов при рендере
    const boardLinks = ref<IBoardLink[]>([
      {
        name: 'Поиск',
        link: '/search'
      },
      {
        name: 'Мои задачи',
        link: '/my-tasks'
      },
      {
        name: 'Доска',
        link: '/board'
      },
      {
        name: 'Авторизация',
        link: '/auth'
      },
      {
        name: 'Регистрация',
        link: '/register'
      },
      {
        name: 'На главую',
        link: '/main'
      }
    ])

    return {
      boardLinks
    }
  }
})
</script>

<style scoped>
.history {
  display: grid;
  align-content: flex-start;
  box-sizing: border-box;
  width: 400px;
  height: 600px;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  color: var(--black);
  background: var(--light-gray);
  background: linear-gradient(210deg, var(--light-gray) 0%, lightgray 100%);
}

.title {
  text-align: center;
  font-size: 20px;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 10px;
}

.board-list {
  padding-left: 30px;
  overflow: hidden;
  max-width: 350px;
}

.board-link,
a {
  color: var(--black);
  text-decoration: underline;
  list-style: none;
  margin-bottom: 6px;
}
</style>

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
import { defineComponent } from 'vue'

export interface IBoardLink {
  name: string
  // validate "/*"
  link: string
}

export default defineComponent({
  setup() {
    const boardLinks: IBoardLink[] = [
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
    ]
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
  color: var(--dark-green);
  background: rgb(158, 255, 214);
  background: linear-gradient(
    210deg,
    rgba(0, 81, 63, 0.1) 0%,
    rgba(0, 196, 134, 0.3) 100%
  );
}

.title {
  text-align: center;
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
}

.board-list {
  padding-left: 30px;
  overflow: hidden;
  max-width: 350px;
}

.board-link,
a {
  color: var(--dark-green);
  text-decoration: underline;
  list-style: none;
  margin-bottom: 6px;
}
</style>

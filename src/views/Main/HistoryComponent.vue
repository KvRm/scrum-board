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
        link: '/'
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
  height: 626px;
  padding: 10px;
  margin: 0;
  color: var(--black);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgb(221, 221, 221);
}

.title {
  text-align: center;
  font-size: 20px;
  margin: 5px 0 10px 0;
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

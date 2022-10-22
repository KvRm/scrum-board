<template>
  <div class="history">
    <h4 class="title">История</h4>
    <ul class="board-list">
      <li class="board-item">
        <router-link class="link" to="board/1/2"> Ссылка на доску </router-link>
      </li>
    </ul>
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
.history {
  display: grid;
  align-content: flex-start;
  box-sizing: border-box;
  width: 400px;
  height: 600px;
  padding: 10px;
  margin: 0;
  color: var(--black);
  background: #fff;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0 0 15px rgb(221, 221, 221);
  font-size: 16px;
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
  list-style: none;
}

.board-item {
  margin-bottom: 6px;
}

.link:hover {
  color: rgb(30, 30, 255);
  text-decoration: underline;
}
</style>

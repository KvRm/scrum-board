<template>
  <div class="board">
    <h2 class="title">{{ boardName }}</h2>
    <div class="manage">
      <p class="invite-link">Ссылка-приглашение</p>
      <p class="leave" v-if="isCreator">Покинуть доску</p>
      <p class="remove" v-else>Удалить доску</p>
    </div>
    <SectionsContainer />
  </div>
</template>

<script lang="ts">
import SectionsContainer from '@/views/Board/Section/SectionsContainer.vue'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: { SectionsContainer },

  setup() {
    const isCreator = computed(() => {
      return false
    })

    return { boardName: 'Тестовая доска', isCreator }
  }
})
</script>

<style scoped>
.title {
  text-align: center;
  font-weight: bold;
  margin: 0;
}

.board {
  display: grid;
}

.manage {
  display: inline-flex;
  justify-self: center;
}

.manage p {
  display: inline;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: underline;
  font-size: 15px;
  cursor: pointer;
}
.invite-link {
  color: rgb(0, 0, 200);
}
.leave,
.remove {
  color: rgb(200, 0, 0);
}
</style>

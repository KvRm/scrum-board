<template>
  <div class="board">
    <div class="board-header">
      <h2 class="title">{{ boardName }}</h2>
      <div class="controllers">
        <ButtonUI :color="ButtonColor.blue" :size="ButtonSize.small">
          Ссылка-приглашение
        </ButtonUI>
        <ButtonUI :color="ButtonColor.blue" :size="ButtonSize.small">
          Участники
        </ButtonUI>
        <ButtonUI
          v-if="!isCreator"
          :color="ButtonColor.blue"
          :size="ButtonSize.small"
        >
          Редактировать
        </ButtonUI>
        <ButtonUI
          v-if="!isCreator"
          :color="ButtonColor.red"
          :size="ButtonSize.small"
        >
          Покинуть доску
        </ButtonUI>
        <ButtonUI v-else :color="ButtonColor.red" :size="ButtonSize.small">
          Удалить доску
        </ButtonUI>
      </div>
    </div>
    <SectionsContainer />
  </div>
</template>

<script lang="ts">
import ButtonUI, { ButtonColor, ButtonSize } from '@/components/UI/ButtonUI.vue'
import SectionsContainer from '@/views/Board/Section/SectionsContainer.vue'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: { SectionsContainer, ButtonUI },

  setup() {
    const isCreator = computed(() => {
      return false
    })

    return {
      boardName: 'Тестовая доска',
      isCreator,
      ButtonColor,
      ButtonSize
    }
  }
})
</script>

<style scoped>
.title {
  justify-self: center;
  text-align: center;
  font-weight: bold;
  margin: 0;
  max-width: 800px;
}

.board-header {
  display: grid;
  align-content: center;
  min-width: 980px;
}

.controllers {
  display: inline-flex;
  justify-self: center;
  gap: 6px;
  margin-top: 30px;
}

.controllers button {
  display: inline;
  cursor: pointer;
}
</style>

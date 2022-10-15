<template>
  <div class="board">
    <div class="board-header">
      <h2 class="title">{{ boardName }}</h2>
      <div class="controllers">
        <ButtonUI
          v-if="isCreator"
          :color="ButtonColor.blue"
          :size="ButtonSize.small"
        >
          <img class="icon" src="@/assets/icons/invite.svg" alt="Пригласить" />
        </ButtonUI>
        <ButtonUI :color="ButtonColor.blue" :size="ButtonSize.small">
          <img class="icon" src="@/assets/icons/users.svg" alt="Пользователи" />
        </ButtonUI>
        <ButtonUI
          v-if="isCreator"
          :color="ButtonColor.blue"
          :size="ButtonSize.small"
        >
          <img class="icon" src="@/assets/icons/edit.svg" alt="Редактировать" />
        </ButtonUI>
        <ButtonUI
          v-if="!isCreator"
          :color="ButtonColor.red"
          :size="ButtonSize.small"
        >
          <img class="icon" src="@/assets/icons/leave.svg" alt="Покинуть" />
        </ButtonUI>
        <ButtonUI v-else :color="ButtonColor.red" :size="ButtonSize.small">
          <img class="icon" src="@/assets/icons/remove.svg" alt="Пригласить" />
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
      return !false
    })

    return {
      // валидация, макс длина 50 символов
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

.icon {
  width: 24px;
  height: 24px;
}
</style>

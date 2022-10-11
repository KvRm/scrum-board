<template>
  <div class="board">
    <h2 class="title">{{ boardName }}</h2>
    <div class="manage">
      <ButtonUI :color="ButtonColor.blue" :size="ButtonSize.small">
        Ссылка-приглашение
      </ButtonUI>
      <ButtonUI
        v-if="isCreator"
        :color="ButtonColor.red"
        :size="ButtonSize.small"
      >
        Покинуть доску
      </ButtonUI>
      <ButtonUI v-else :color="ButtonColor.red" :size="ButtonSize.small">
        Удалить доску
      </ButtonUI>
    </div>
    <SectionsContainer />
  </div>
</template>

<script lang="ts">
import ButtonUI, {
  ButtonColor,
  ButtonSize
} from '@/components/composables/UI/ButtonUI.vue'
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
  gap: 10px;
}

.manage button {
  display: inline;
  margin-top: 15px;
  cursor: pointer;
}
</style>

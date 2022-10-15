<template>
  <div class="container board-header">
    <h2 class="title">{{ boardName }}</h2>
    <div class="controllers">
      <div class="search/filter">
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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import ButtonUI, { ButtonColor, ButtonSize } from '@/components/UI/ButtonUI.vue'

export default defineComponent({
  components: {
    ButtonUI
  },

  props: {
    boardName: {
      type: String,
      required: true
    }
  },

  setup() {
    const isCreator = computed(() => {
      return !false
    })

    return {
      ButtonColor,
      ButtonSize,
      isCreator
    }
  }
})
</script>

<style scoped>
.board-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  min-width: 980px;
}
.icon {
  width: 24px;
  height: 24px;
}
</style>

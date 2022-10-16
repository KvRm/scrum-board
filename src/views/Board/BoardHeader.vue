<template>
  <div class="board-header">
    <div class="settings">
      <h2 class="title">{{ boardName }}</h2>
      <div class="controllers">
        <InviteIcon />
        <img class="icon" src="@/assets/icons/invite.svg" alt="Пригласить" />
        <img class="icon" src="@/assets/icons/users.svg" alt="Пользователи" />
        <img class="icon" src="@/assets/icons/edit.svg" alt="Редактировать" />
        <img class="icon" src="@/assets/icons/leave.svg" alt="Покинуть" />
        <img class="icon" src="@/assets/icons/remove.svg" alt="Пригласить" />
      </div>
    </div>
    <div class="search-filter">
      <InputUI :title="'Поиск'" class="search" />
      <SelectUI
        :title="'Критичность задачи'"
        :selectList="[...criticalLvlList]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import InputUI from '@/components/UI/InputUI.vue'
import SelectUI from '@/components/UI/SelectUI.vue'
import { TaskCriticalLvl } from '@/types'
import InviteIcon from '@/components/static/InviteIcon.vue'

export default defineComponent({
  components: {
    InputUI,
    SelectUI,
    InviteIcon
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

    const criticalLvlList = computed(() => {
      return [
        TaskCriticalLvl.veryHigh,
        TaskCriticalLvl.high,
        TaskCriticalLvl.medium,
        TaskCriticalLvl.low
      ]
    })

    return {
      isCreator,
      criticalLvlList
    }
  }
})
</script>

<style scoped>
.board-header {
  display: grid;
  align-items: flex-start;
  margin: 0 16px;
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px lightgray;
  background: var(--light-gray);
}

.settings {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.title {
  margin: 0;
  padding: 10px 0;
}

.controllers {
  display: flex;
  gap: 5px;
  justify-self: flex-end;
}

.search-filter {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5px;
}

.icon {
  width: 30px;
  height: 30px;
}
</style>

<template>
  <div class="board-header">
    <div class="settings">
      <h2 class="title">Название доски</h2>
      <ul class="controllers">
        <li class="controller" data-tooltip="Пользователи">
          <FontAwesomeIcon color="var(--black)" icon="fa-solid fa-user" />
        </li>
        <li class="controller" data-tooltip="Изменить" v-if="isCreator">
          <FontAwesomeIcon color="var(--black)" icon="fa-solid fa-pen" />
        </li>
        <li class="controller" data-tooltip="Покинуть" v-if="!isCreator">
          <FontAwesomeIcon color="var(--black)" icon="fa-solid fa-arrow-right-from-bracket" />
        </li>
        <li class="controller" data-tooltip="Удалить" v-if="isCreator">
          <FontAwesomeIcon color="var(--black)" icon="fa-solid fa-trash-can" />
        </li>
      </ul>
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

export default defineComponent({
  components: {
    InputUI,
    SelectUI
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
  padding-right: 10px;
}

.search-filter {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5px;
}

.controllers {
  display: flex;
  gap: 5px;
  justify-self: flex-end;
}

.controller {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
}
.controller::after {
  content: attr(data-tooltip);
  position: absolute;
  width: max-content;
  bottom: 115%;
  right: 50%;
  left: 50%;
  padding: 4px 8px;
  color: var(--light-gray);
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0 0 5px lightgray;
  background-color: var(--black);
  opacity: 0;
  font-size: 0.8rem;
  visibility: hidden;
  transform: translate(-50%, 18px) scale(0.8);
  transition: visibility, opacity, transform 200ms;
}

.controller:hover::after {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0);
}

.icon {
  width: 30px;
  height: 30px;
}

svg {
  width: 25px;
  height: 25px;
}
</style>

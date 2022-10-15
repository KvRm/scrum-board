<template>
  <div class="my-task">
    <span class="title">
      <router-link class="link" :to="link">
        {{ title }}
      </router-link>
    </span>
    <span class="board">
      <router-link class="link" :to="'' + boardLink">
        {{ boardName }}
      </router-link>
    </span>
    <span
      class="criticalLvl"
      :class="{
        red: criticalLvl === 'Очень высокая',
        orange: criticalLvl === 'Высокая',
        blue: criticalLvl === 'Средняя',
        green: criticalLvl === 'Низкая'
      }"
      >{{ criticalLvl }}
    </span>
    <span class="completeDate">{{ completeDate }}</span>
    <span class="author">
      <router-link class="link" to="someUserLink">
        {{ author }}
      </router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { TaskCriticalLvl } from '@/types'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    boardName: {
      type: String,
      required: true
    },
    boardLink: {
      type: String,
      required: true
    },
    criticalLvl: {
      type: String as PropType<TaskCriticalLvl>,
      required: true
    },
    completeDate: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.my-task {
  display: grid;
  grid-template-columns: 3fr 3fr 2fr 2fr 2fr;
  align-items: center;
  justify-items: center;
  height: 40px;
}

.link:hover {
  color: rgb(30, 30, 255);
  text-decoration: underline;
}

/* Сделать эмодзи в зависимости от критичности */
.red {
  color: rgba(255, 59, 59);
}
.orange {
  color: rgba(255, 101, 12);
}
.blue {
  color: rgba(0, 0, 255);
}
.green {
  color: rgba(0, 115, 90);
}
</style>

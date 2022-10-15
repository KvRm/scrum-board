<template>
  <div class="my-task">
    <span class="title">
      <router-link class="link" :to="link">
        {{ title }}
      </router-link>
    </span>
    <span class="board">
      <router-link class="link" :to="'' + boardLink">
        {{ boardName }}</router-link
      >
    </span>
    <span class="criticalLvl">{{ criticalLvl }}</span>
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
  height: 60px;
}

.link:hover {
  color: var(--blue);
  text-decoration: underline;
}
</style>

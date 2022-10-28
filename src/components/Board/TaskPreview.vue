<template>
  <div class="task">
    <CriticalLvlIcon class="icon" :criticalLvl="TaskCriticalLvl.medium" />
    <p class="title">
      <router-link class="link" :to="`/board/1/2`">
        Название задачи
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CriticalLvlIcon from '@/components/UI/CriticalLvlIcon.vue'
import { TaskCriticalLvl } from '@/types'

export default defineComponent({
  components: { CriticalLvlIcon },

  setup() {
    return { TaskCriticalLvl }
  }
})
</script>

<style scoped>
.task {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px;
  width: 350px;
  padding: 14px 8px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px rgb(221, 221, 221);
  overflow: hidden;
}

.title {
  justify-self: flex-start;
}

.link:hover {
  color: rgb(38, 38, 255);
  text-decoration: underline;
}

.icon {
  display: grid;
  align-items: center;
}
</style>

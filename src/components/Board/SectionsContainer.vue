<template>
  <div
    class="sections-container"
    :style="`grid-template-columns: repeat(${sectionListLength + 1}, auto)`"
  >
    <SectionComponent />
    <div v-if="isEditing" class="add-section">
      <img src="@/assets/icons/plus.svg" alt="Добавить" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SectionComponent from '@/components/Board/SectionComponent.vue'

export default defineComponent({
  components: { SectionComponent },

  setup() {
    const isEditing = computed(() => !false)

    // const sectionListLength = computed(() => sectionList.length)

    return {
      isEditing,
      // sectionList,
      // sectionListLength
    }
  }
})
</script>

<style scoped>
.sections-container {
  display: grid;
  justify-content: flex-start;
  column-gap: 15px;
  min-height: calc(100vh - 65px);
  margin-top: 10px;
  padding: 0px 16px;
  overflow-x: scroll;
}

.add-section {
  display: grid;
  justify-content: center;
  align-content: center;
  height: 70px;
  width: 70px;
  margin-bottom: 5px;
  border-radius: 10px;
  background: var(--light-gray);
  border: 1px solid lightgray;
  box-shadow: 0 0 5px lightgray;
}

.add-section img {
  height: 70px;
  width: 70px;
  transition: all 0.2s ease;
}

.add-section:hover {
  cursor: pointer;
}
</style>

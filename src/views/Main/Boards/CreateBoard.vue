<template>
  <div class="create-board">
    <img class="plus-icon" src="@/assets/icons/plus.svg" alt="" srcset="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
.create-board {
  display: grid;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(190, 190, 190);
  min-width: 280px;
  height: 170px;
}
.plus-icon {
  align-self: center;
}
.create-board:hover {
  background: rgba(0, 0, 0, 0.9);
  cursor: pointer;
  color: lightgray;
  border: 2px dashed lightgray;
}

.plus-icon {
  transition: all 0.2s ease;
}
.create-board:hover .plus-icon {
  rotate: 90deg;
}
</style>

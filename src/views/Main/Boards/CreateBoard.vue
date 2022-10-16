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
  justify-content: center;
  min-width: 280px;
  height: 170px;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0 0 10px rgb(221, 221, 221);
  background: var(--light-gray);
}
.plus-icon {
  align-self: center;
}
.create-board:hover {
  background: var(--light-black);
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

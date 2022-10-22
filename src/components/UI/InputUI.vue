<template>
  <div class="input-container">
    <label>{{ title }}</label>
    <input class="input" type="text" placeholder="Введите текст" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String
    },
    model: {
      type: String
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.input-container {
  display: grid;
  margin-bottom: 10px;
}

.input {
  padding: 8px 10px;
  border: 2px solid var(--gray);
  border-radius: 8px;
  width: 100%;
  height: 40px;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px lightgray;
}
.input:focus {
  border: 2px solid var(--gray);
}

label {
  font-size: 14px;
  padding-left: 2px;
}
</style>

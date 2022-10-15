<template>
  <div class="select-container">
    <label>{{ title }}</label>
    <select class="select">
      <option class="option" value="">Выбрать...</option>
      <option
        class="option"
        v-for="select in selectList"
        :key="select"
        value="select"
      >
        {{ select }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String
    },
    selectList: {
      type: Array,
      required: true
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.select-container {
  display: inline-grid;
  margin-bottom: 10px;
}

.select {
  padding: 5px 10px;
  border: 2px solid var(--gray);
  background: #fff;
  border-radius: 4px;
  min-width: 300px;
  height: 35px;
}
.select:focus {
  border: 2px solid var(--black);
}

label {
  font-size: 14px;
  padding-left: 2px;
}
</style>

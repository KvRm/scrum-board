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
  padding: 8px 10px;
  border: 2px solid var(--gray);
  background: #fff;
  border-radius: 8px;
  min-width: 300px;
  height: 40px;
  border: 1px solid lightgray;
  box-shadow: 0 0 5px lightgray;
}
.select:focus,
.select:active {
  border: 2px solid var(--gray);
}

label {
  font-size: 14px;
  padding-left: 2px;
}
</style>

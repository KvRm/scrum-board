<template>
  <div class="error">
    <p><span class="error-name">404 </span>Страница не найдена!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.error {
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 24px;
}
</style>

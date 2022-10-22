<template>
  <div class="comment">
    <p class="author">Автор</p>
    <p class="text">Текст коммента</p>
    <p class="creationDate">Дата создания</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped></style>

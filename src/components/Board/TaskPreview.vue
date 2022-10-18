<template>
  <div class="task">
    <p class="title">
      <router-link class="link" :to="link">{{ title }}</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
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
.task {
  width: 350px;
  padding: 0 14px;
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
</style>

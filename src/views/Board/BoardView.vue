<template>
  <h2 class="title">{{ boardName }}</h2>
  <SectionsContainer></SectionsContainer>
</template>

<script lang="ts">
import SectionsContainer from "@/views/Board/Section/SectionsContainer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: { SectionsContainer },

  setup() {
    return { boardName: "Тестовая доска" };
  },
});
</script>

<style scoped>
.title {
  text-align: center;
  font-weight: bold;
}
</style>

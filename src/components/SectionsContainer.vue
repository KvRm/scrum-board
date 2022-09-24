<template>
  <div class="sections-container">
    <section-component />
    <section-component />
    <section-component />
    <section-component />
    <section-component />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionComponent from "@/components/SectionComponent.vue";

export default defineComponent({
  components: { SectionComponent },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.sections-container {
  display: grid;
  overflow-x: scroll;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  min-height: 100vh;
  padding: 0px 10px;
}
</style>

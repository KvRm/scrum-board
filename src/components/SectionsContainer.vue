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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>

<template>
  <div class="home">
    <button-component :color="ButtonColor.primary" />
    <button-component :color="ButtonColor.green" />
    <button-component :color="ButtonColor.red" />
    <button-component :color="ButtonColor.blue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import { ButtonColor } from "@/types/index";

export default defineComponent({
  name: "HomeView",
  components: { ButtonComponent },

  setup() {
    return {
      ButtonColor,
    };
  },
});
</script>

<style scoped>
.home {
  margin-left: 10px;
  margin-top: 10px;
}
</style>

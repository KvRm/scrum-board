<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import { ButtonColor } from "@/types/index";

export default defineComponent({
  name: "HomeView",
  // components: { ButtonComponent },

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

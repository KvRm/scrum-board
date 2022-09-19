<template>
  <div class="home">
    <options-component></options-component>
    <sections-container />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonComponent, {
  ButtonColor,
} from "@/components/UI/ButtonComponent.vue";
import OptionsComponent from "@/components/manage-components/OptionsComponent.vue";
import SectionsContainer from "@/components/SectionsContainer.vue";

export default defineComponent({
  name: "HomeView",
  components: { OptionsComponent, SectionsContainer },

  setup() {
    return {
      ButtonColor,
    };
  },
});
</script>

<template>
  <header-component></header-component>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default defineComponent({
  components: { HeaderComponent },
});
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
}

body {
  font-size: 16px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--black);
}

a {
  text-decoration: none;
  color: var(--black);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

:root {
  --gray: rgba(69, 69, 69, 0.536);
  --black: rgb(47, 47, 47);
  --green: rgb(0, 115, 90);
  --red: rgb(193, 42, 42);
  --blue: rgb(7, 114, 191);
}
</style>

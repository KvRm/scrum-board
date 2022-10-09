<template>
  <div class="layout">
    <HeaderComponent class="header-component"></HeaderComponent>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "./components/Header/HeaderComponent.vue";

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

.header-component {
  position: fixed;
  top: 0;
  z-index: 1000;
  background: white;
}

.view {
  display: relative;
  z-index: 999;
  margin-top: 100px;
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
  padding: 10px;
}

.router-link-active::after {
  content: "";
  display: block;
  height: 3px;
  background: var(--green);
  margin-top: 2px;
  transition: all 0.5s;
  transition: 0.2s ease-in-out;
}

:root {
  --gray: rgba(69, 69, 69, 0.536);
  --black: rgb(47, 47, 47);
  --green: rgb(0, 115, 90);
  --dark-green: rgb(0, 81, 63);
  --red: rgb(193, 42, 42);
  --blue: rgb(7, 114, 191);
}
</style>

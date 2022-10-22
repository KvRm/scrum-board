<template>
  <div class="layout">
    <HeaderComponent class="header-component" />
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from './Header/HeaderComponent.vue'

export default defineComponent({
  components: { HeaderComponent }
})
</script>

<style>
.header-component {
  position: fixed;
  top: 0;
  z-index: 1000;
  background: white;
}

.view {
  display: relative;
  z-index: 999;
  padding-top: 70px;
  min-height: calc(100vh - 100px);
}
.container {
  padding: 10px;
  margin: 0 50px;
  height: 100%;
}
</style>

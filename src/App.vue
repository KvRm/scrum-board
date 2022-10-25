<template>
  <component :is="layout" />
</template>

<script lang="ts">
import { Component, computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue'
import Error404Layout from '@/layout/Error404Layout.vue'
import LoginView from '@/layout/LoginView.vue'

export default defineComponent({
  components: { MainLayout, Error404Layout, LoginView },

  setup() {
    const router = useRouter()

    const layout = computed<Component>(() => {
      if (router.currentRoute.value.meta.error) return Error404Layout
      if (router.currentRoute.value.meta.login) return LoginView

      return MainLayout
    })

    return {
      layout
    }
  }
})
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 500;
  margin: 0;
}

body {
  font-size: 14px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--black);
}

a {
  text-decoration: none;
  color: var(--black);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

:root {
  --gray: rgba(69, 69, 69, 0.536);
  --black: rgb(47, 47, 47);
  --light-gray: rgb(246, 248, 250);
  --light-black: rgb(55, 55, 55);
  --green: rgb(0, 115, 90);
  --dark-green: rgb(0, 81, 63);
  --red: rgb(193, 42, 42);
  --blue: rgb(7, 114, 191);
}
</style>

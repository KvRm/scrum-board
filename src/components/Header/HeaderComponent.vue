<template>
  <header class="header">
    <div class="container header-container">
      <nav class="nav">
        <router-link class="link" to="/">На главную</router-link>
        <router-link class="link" to="/my-tasks">Мои задачи</router-link>
        <router-link class="link" to="/search">Найти</router-link>
      </nav>
      <component :is="userComponent" />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, computed, defineComponent, ref } from 'vue'
import AuthLinks from './UserAuthStatus/AuthLinks.vue'
import UserProfile from './UserAuthStatus/UserProfile.vue'

export default defineComponent({
  setup() {
    const isAuth = ref<boolean>(false)

    const userComponent: Component = computed(() => {
      if (isAuth.value) return UserProfile
      return AuthLinks
    })

    return {
      isAuth,
      userComponent
    }
  }
})
</script>

<style scoped>
.header {
  height: 60px;
  box-shadow: 0px 0 20px lightgray;
  width: 100%;
}

.header-container {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 60px;
  padding: 0 10px;
}

.nav {
  display: inline-flex;
  gap: 35px;
  font-size: 18px;
  height: 100%;
}

.link:hover {
  color: black;
  transition: all 0.2s;
}

.nav * {
  display: flex;
  height: 95%;
  align-items: center;
  margin-top: 3px;
  border-bottom: 3px solid #fff;
}

.nav .router-link-active {
  border-bottom: 3px solid var(--green);
}
</style>

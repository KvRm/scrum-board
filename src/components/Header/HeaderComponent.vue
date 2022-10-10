<template>
  <header class="header">
    <div class="container header-container">
      <nav class="nav">
        <router-link class="link" to="/">На главную</router-link>
        <router-link class="link" to="/my-tasks">Мои задачи</router-link>
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
  box-shadow: 0px 0 10px gray;
  width: 100%;
}

.header-container {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 60px;
}

.nav {
  display: inline-flex;
  gap: 35px;
  font-size: 18px;
}

.link:hover {
  color: black;
  transition: all 0.2s;
}

.nav .router-link-active::after {
  content: '';
  display: block;
  height: 3px;
  background: var(--green);
  margin-top: 2px;
  transition: all 0.5s;
  transition: 0.2s ease-in-out;
}
</style>

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
import { useStore } from '@/stores'
import { Component, computed, defineComponent } from 'vue'
import AuthLinks from './AuthLinks.vue'
import UserProfile from './UserProfile.vue'

export default defineComponent({
  setup() {
    const store = useStore()

    const userComponent: Component = computed(() => {
      if (store.getters.user) return UserProfile
      return AuthLinks
    })

    return {
      userComponent
    }
  }
})
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  box-shadow: 0 0 10px lightgray;
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

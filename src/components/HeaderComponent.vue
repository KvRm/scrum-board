<template>
  <header class="header">
    <div class="container header-container">
      <nav class="nav">
        <router-link class="link" to="/">На главную</router-link>
        <router-link class="link" to="/personal-tasks">Мои задачи</router-link>
      </nav>
      <div v-if="!isAuth" class="menu auth-menu">
        <button-component :color="ButtonColor.green" :size="ButtonSize.medium">
          Войти
        </button-component>
        <button-component :color="ButtonColor.green" :size="ButtonSize.medium">
          Регистрация
        </button-component>
      </div>
      <div v-else class="menu user-menu">
        <div class="user-profile">Профиль</div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ButtonComponent, {
  ButtonColor,
  ButtonSize,
} from "@/components/UI/ButtonComponent.vue";

export default defineComponent({
  components: {
    ButtonComponent,
  },
  setup() {
    const isAuth = ref<boolean>(false);

    return {
      isAuth,
      ButtonColor,
      ButtonSize,
    };
  },
});
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

.menu {
  display: inline;
}

.auth-menu {
  display: flex;
  gap: 10px;
}

.link:hover {
  opacity: 0.8;
  transition: all 0.2s;
}
</style>

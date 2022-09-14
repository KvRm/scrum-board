<template>
  <header class="header">
    <div class="container header-container">
      <nav class="nav">
        <router-link to="/">На главную</router-link>
        <router-link to="/history">История</router-link>
      </nav>
      <div v-if="!isAuth" class="menu auth-menu">
        <button-component :color="ButtonColor.green">Войти</button-component>
        <button-component :color="ButtonColor.green">
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
import { defineComponent, onMounted, ref } from "vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";
import { ButtonColor } from "@/types/index";

export default defineComponent({
  components: {
    ButtonComponent,
  },
  setup() {
    const isAuth = ref<boolean>(false);

    return {
      isAuth,
      ButtonColor,
    };
  },
});
</script>

<style scoped>
.header {
  height: 60px;
  box-shadow: 0px 0 10px gray;
}

.header-container {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
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
</style>

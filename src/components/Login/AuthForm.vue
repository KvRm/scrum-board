<template>
  <form class="form" @submit.prevent="handelForm">
    <h2 class="title">Авторизация</h2>

    Почта
    <input type="text" v-model="email" />
    Пароль
    <input type="password" v-model="password" />

    <ButtonUI
      class="submit-button"
      :color="ButtonColor.green"
      :size="ButtonSize.medium"
      @click="signIn"
    >
      Войти
    </ButtonUI>
    <p class="link">
      Нет аккаунта?
      <span @click="changeForm">Регистрация</span>
    </p>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ButtonUI, { ButtonColor, ButtonSize } from '@/components/UI/ButtonUI.vue'
import { useRouter } from 'vue-router'
import { login } from '@/services/auth/services'
import type { LoginRequest } from '@/types/auth/index'

export default defineComponent({
  components: { ButtonUI },

  setup() {
    const router = useRouter()

    const email = ref<string>('')
    const password = ref<string>('')

    function signIn() {
      const body:LoginRequest = {
        email.value,
        password.value
      }

      console.log(login({email.value, password.value}))
    }

    function changeForm() {
      router.push({
        query: {
          type: 'register'
        }
      })
    }

    return {
      changeForm,
      ButtonColor,
      ButtonSize,
      email,
      password,
      signIn
    }
  }
})
</script>

<style scoped>
.form {
  display: grid;
}

.title {
  text-align: center;
  margin-bottom: 10px;
}

.link {
  margin-top: 10px;
}

.link span {
  color: blue;
  cursor: pointer;
}
.submit-button {
  display: grid;
  justify-self: center;
}
</style>

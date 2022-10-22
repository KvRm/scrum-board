<template>
  <form class="form" @submit.prevent="handelForm">
    <h2 class="title">Регистрация</h2>
    Почта
    <input type="text" v-model="email" />
    Пароль
    <input type="password" v-model="password" />
    <InputUI :title="'Повторите пароль'" />

    <ButtonUI
      class="submit-button"
      :color="ButtonColor.green"
      :size="ButtonSize.medium"
      @click="register"
    >
      Войти
    </ButtonUI>

    <p class="link">
      Уже есть аккаунт?
      <span @click="changeForm">Авторизация</span>
    </p>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue'
import InputUI from '@/components/UI/InputUI.vue'
import ButtonUI, { ButtonColor, ButtonSize } from '@/components/UI/ButtonUI.vue'
import { useRouter } from 'vue-router'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth } from '@/services/auth'

export default defineComponent({
  components: { InputUI, ButtonUI },

  setup() {
    const router = useRouter()

    const email = ref<string>('')
    const password = ref<string>('')

    function register() {
      createUserWithEmailAndPassword(auth, email.value, password.value)
    }

    function changeForm() {
      router.push({
        query: {
          type: 'auth'
        }
      })
    }

    return {
      changeForm,
      ButtonColor,
      ButtonSize,
      email,
      password,
      register
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

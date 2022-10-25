<template>
  <form class="form" @submit.prevent="handleForm">
    <h2 class="title">Авторизация</h2>

    Почта
    <input type="text" v-model="email" />
    Пароль
    <input type="password" v-model="password" />

    <ButtonUI
      class="submit-button"
      :color="ButtonColor.green"
      :size="ButtonSize.medium"
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
import { useStore } from '@/stores'
import { RegisterRequest } from '@/types'

export default defineComponent({
  components: { ButtonUI },

  setup() {
    const router = useRouter()
    const store = useStore()

    const email = ref<string>('')
    const password = ref<string>('')

    function changeForm() {
      router.push({
        query: {
          type: 'register'
        }
      })
    }

    // function handleForm() {
    //   const payload: RegisterRequest = {
    //     email: email.value,
    //     password: password.value
    //   }

    //   // store.dispatch('REGISTER', payload)
    // }

    return {
      changeForm,
      ButtonColor,
      ButtonSize,
      email,
      password
      // handleForm
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

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
      {{ buttonText }}
    </ButtonUI>
    <p class="link">
      Нет аккаунта?
      <span @click="changeForm">Регистрация</span>
    </p>
    <p class="error">{{ authError }}</p>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import ButtonUI, { ButtonColor, ButtonSize } from '@/components/UI/ButtonUI.vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/stores'
import { LoginRequest } from '@/types'

export default defineComponent({
  components: { ButtonUI },

  setup() {
    const router = useRouter()
    const store = useStore()

    const email = ref<string>('')
    const password = ref<string>('')

    const authError = computed<string>(() => store.getters.errorState)
    const buttonText = computed<string>(() => {
      if (store.getters.loadingState) return 'Loading...'
      return 'Войти'
    })

    function changeForm() {
      router.push({
        query: {
          type: 'register'
        }
      })
    }

    function handleForm() {
      const payload: LoginRequest = {
        email: email.value,
        password: password.value
      }

      store.dispatch('LOGIN', payload)
    }

    return {
      changeForm,
      ButtonColor,
      ButtonSize,
      email,
      password,
      authError,
      buttonText,
      handleForm
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

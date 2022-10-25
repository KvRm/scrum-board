<template>
  <form class="form" @submit.prevent="handleForm">
    <h2 class="title">Регистрация</h2>
    Почта
    <input type="text" v-model="email" />
    Пароль
    <input type="password" v-model="password" />
    Pass
    <input type="password" />

    <ButtonUI
      class="submit-button"
      :color="ButtonColor.green"
      :size="ButtonSize.medium"
    >
      {{ buttonText }}
    </ButtonUI>
    <p>{{ errorMessage }}</p>
    <p class="link">
      Уже есть аккаунт?
      <span @click="changeForm">Авторизация</span>
    </p>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/stores'
import ButtonUI, { ButtonColor, ButtonSize } from '@/components/UI/ButtonUI.vue'
import { RegisterRequest } from '@/types'

export default defineComponent({
  components: { ButtonUI },

  setup() {
    const router = useRouter()
    const store = useStore()

    const email = ref<string>('')
    const password = ref<string>('')

    const errorMessage = computed<string>(() => store.getters.errorState)
    const buttonText = computed<string>(() => {
      if (store.getters.loadingState) return 'Loading...'
      return 'Создать'
    })

    function changeForm() {
      router.push({
        query: {
          type: 'auth'
        }
      })
    }

    function handleForm() {
      const payload: RegisterRequest = {
        email: email.value,
        password: password.value
      }

      store.dispatch('REGISTER', payload)
    }

    return {
      changeForm,
      ButtonColor,
      ButtonSize,
      email,
      password,
      errorMessage,
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

<template>
  <form class="form" @submit.prevent="handelForm">
    <h2 class="title">Авторизация</h2>
    <InputUI :title="'Почта'" />
    <InputUI :title="'Пароль'" />

    <ButtonUI
      class="submit-button"
      :color="ButtonColor.green"
      :size="ButtonSize.medium"
      >Войти</ButtonUI
    >
    <p class="link">
      Нет аккаунта?
      <span @click="changeForm">Регистрация</span>
    </p>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputUI from '@/components/UI/InputUI.vue'
import ButtonUI, { ButtonColor, ButtonSize } from '@/components/UI/ButtonUI.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { InputUI, ButtonUI },

  setup() {
    const router = useRouter()

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
      ButtonSize
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

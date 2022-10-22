<template>
  <form @submit.prevent="handelForm">
    <h2 class="title">Регистрация</h2>
    <InputUI :title="'Почта'" />
    <InputUI :title="'Пароль'" />

    <ButtonUI :color="ButtonColor.green" :size="ButtonSize.medium">
      Войти
    </ButtonUI>

    <p>
      Уже есть аккаунт?
      <span class="link" @click="changeForm">Авторизация</span>
    </p>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputUI from '@/components/UI/InputUI.vue'
import ButtonUI, { ButtonColor, ButtonSize } from '@/components/UI/ButtonUI.vue'

export default defineComponent({
  components: { InputUI, ButtonUI },

  setup(_, { emit }) {
    function changeForm() {
      emit('changeForm', 'auth')
    }

    return { changeForm, ButtonColor, ButtonSize }
  }
})
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 10px;
}

.link {
  color: blue;
  cursor: pointer;
}
</style>

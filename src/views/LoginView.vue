<template>
  <div class="form">
    <component @changeForm="changeForm" :is="form" />
  </div>
</template>

<script lang="ts">
import { Component, computed, defineComponent, ref } from 'vue'
import AuthForm from '@/components/Login/AuthForm.vue'
import RegisterForm from '@/components/Login/RegisterForm.vue'

export default defineComponent({
  components: { AuthForm, RegisterForm },
  setup() {
    const formName = ref<'auth' | 'register'>('auth')

    const form = computed<Component>(() => {
      if (formName.value === 'auth') return AuthForm
      else return RegisterForm
    })

    function changeForm(newName: 'auth' | 'register') {
      formName.value = newName
    }

    return {
      form,
      changeForm
    }
  }
})
</script>

<style scoped>
.form {
  max-width: 500px;
  margin: 40px auto;
  padding: 10px;
  background: var(--light-gray);
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 5px lightgray;
}
</style>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <InputUI v-model="login.email" required placeholder="Email" type="email">
      </InputUI>
    </div>

    <div>
      <InputUI
        v-model="login.password"
        required
        placeholder="Password"
        type="password"
      >
      </InputUI>
    </div>

    <div>
      <ButtonUI :title="textButtonSubmit" />
    </div>

    <p>{{ $store.state.auth.error }}</p>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'

import InputUI from '@/components/UI/InputUI.vue'
import ButtonUI from '@/components/UI/ButtonUI.vue'

export default defineComponent({
  components: {
    InputUI,
    ButtonUI
  },

  setup() {
    const store = useStore()

    const email = ref<string>('')
    const password = ref<string>('')

    const textButtonSubmit = computed(() =>
      store.state.auth.loading ? 'LOADING...' : 'SIGN IN'
    )

    async function handleSubmit() {
      await store.dispatch('authLogin', { email, password })
    }

    return {
      email,
      password,
      textButtonSubmit,
      handleSubmit
    }
  }
})
</script>

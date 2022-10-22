<template>
  <div class="form-continer">
    <component :is="form" />
  </div>
</template>

<script lang="ts">
import { Component, computed, defineComponent, onMounted } from 'vue'
import AuthForm from '@/components/Login/AuthForm.vue'
import RegisterForm from '@/components/Login/RegisterForm.vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  components: { AuthForm, RegisterForm },
  setup() {
    const route = useRoute()
    const router = useRouter()

    onMounted(() => {
      if (!route.query.type)
        router.push({
          query: { type: 'auth' }
        })
    })

    const form = computed<Component>(() => {
      if (route.query.type === 'register') return RegisterForm
      return AuthForm
    })

    return {
      form
    }
  }
})
</script>

<style scoped>
.form-continer {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20vh;
  padding: 10px;
  background: var(--light-gray);
  border: 1px solid lightgray;
  border-radius: 10px;
  box-shadow: 0 0 5px lightgray;
}
</style>

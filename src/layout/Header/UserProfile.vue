<template>
  <div class="user-profile">{{ user.email }}</div>
</template>

<script lang="ts">
import { useStore } from '@/stores'
import { User } from '@/types'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()

    const user = computed<User>(() => store.getters.userState)

    return {
      user
    }
  }
})
</script>

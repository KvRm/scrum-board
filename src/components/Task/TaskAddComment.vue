<template>
  <div class="add-comment-container">
    <form
      v-if="isEditing"
      @submit.prevent="handleForm"
      class="add-comment-form"
    >
      <textarea class="text" placeholder="Введите текст" />
      <button>Отправить</button>
    </form>
    <span v-else @click="toggleEditingState" class="add-comment-button">
      + Добавить комментарий
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isEditing = ref<boolean>(false)

    const toggleEditingState = () => {
      isEditing.value = !isEditing.value
    }

    const handleForm = () => {
      toggleEditingState()
    }

    return {
      isEditing,
      toggleEditingState,
      handleForm
    }
  }
})
</script>

<style scoped>
.add-comment-form {
  margin-top: 20px;
}

.text {
  width: 800px;
  height: 150px;
  border: 1px solid lightgray;
  resize: none;
}

.add-comment-container {
  display: grid;
  justify-content: center;
}
.add-comment-button {
  margin-top: 10px;
  font-size: 14px;
  cursor: pointer;
}

.add-comment-button:hover {
  text-decoration: underline;
}
</style>

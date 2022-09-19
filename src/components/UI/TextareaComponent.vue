<template>
  <div class="textarea-container">
    <label class="textareaTitle">{{ textareaTitle }}</label>
    <textarea
      class="textarea"
      cols="100"
      rows="5"
      required
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    placeholder: {
      type: String,
    },
    textareaTitle: {
      type: String,
    },
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.textarea-container {
  display: inline-grid;
  margin-bottom: 10px;
}

.textarea {
  font-size: 14px;
  padding: 5px 10px;
  border: 2px solid var(--gray);
  border-radius: 4px;
  margin-top: 10px;
  min-height: 100px;
  max-height: 100px;
  min-width: 400px;
}
.textarea:focus {
  border: 2px solid var(--black);
}

label {
  font-size: 14px;
  text-align: center;
}
</style>

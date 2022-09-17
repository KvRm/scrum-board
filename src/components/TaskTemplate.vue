<template>
  <div class="task">
    <p class="title">{{ title }}</p>
    <textarea-component
      :placeholder="'Введите содержание задачи'"
      :title="'Содержание задачи'"
    />
    <p>
      Крайний срок: <span>{{ timeToComplete }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextareaComponent from "./UI/TextareaComponent.vue";

export default defineComponent({
  components: { TextareaComponent },

  props: {
    title: {
      type: String,
      required: true,
    },
    criticalLvl: {
      type: String,
      required: true,
    },
    timeToComplete: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.task {
  border: 2px solid var(--gray);
  border-radius: 5px;
  background: #fff;
  margin-top: 20px;
  height: 227px;
  padding: 5px 10px;
}

.title {
  text-align: center;
}

p {
  line-height: 0;
}
</style>

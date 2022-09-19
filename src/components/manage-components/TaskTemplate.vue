<template>
  <div class="task">
    <p class="title">{{ title }}</p>
    <textarea-component
      :placeholder="'Введите содержание задачи'"
      :textareaTitle="'Содержание задачи'"
    />
    <div class="info">
      <div>
        <p>
          Крайний срок: <span>{{ timeToComplete }}</span>
        </p>
        <p>Столбец: <span>столбец</span></p>
      </div>
      <div class="author">
        <p>Автор: user</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextareaComponent from "../UI/TextareaComponent.vue";

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
  font-size: 18px;
  line-height: 0;
}

.info {
  display: flex;
  justify-content: space-between;
}

.info p {
  display: inline;
  padding-left: 5px;
  margin-right: 20px;
}

p {
  line-height: 0;
}
</style>

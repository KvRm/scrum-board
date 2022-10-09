<template>
  <section class="section">
    <div class="section-info">
      <p class="title">
        {{ title }}
        <slot name="add-task"></slot>
      </p>
    </div>
    <TaskComponent
      :criticalLvl="TaskCriticalLvl.high"
      :completeDate="`08.10.2022`"
    />
    <TaskComponent
      :criticalLvl="TaskCriticalLvl.high"
      :completeDate="`31.10.2022`"
    />
    <TaskComponent
      :criticalLvl="TaskCriticalLvl.high"
      :completeDate="`31.10.2022`"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskComponent, { TaskCriticalLvl } from "./Task/TaskPreview.vue";

export default defineComponent({
  components: { TaskComponent },
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {
      TaskCriticalLvl,
    };
  },
});
</script>

<style scoped>
.section {
  display: grid;
  align-content: flex-start;
  gap: 15px;
}
.section-info {
  text-align: center;
  margin-bottom: 5px;
}
.title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
.description {
  font-size: 14px;
  padding: 0 5px;
  margin-top: 0;
  opacity: 0.95;
}
</style>

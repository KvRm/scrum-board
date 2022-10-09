<template>
  <TaskPreview
    v-for="(task, index) in taskList"
    :key="index"
    :criticalLvl="task.criticalLvl"
    :completeDate="task.completeDate"
    :author="task.author"
  />
</template>

<script lang="ts">
import { TaskPreviewProps, TaskCriticalLvl } from "@/types";
import { defineComponent, PropType } from "vue";
import TaskPreview from "./TaskPreview.vue";

export default defineComponent({
  components: {
    TaskPreview,
  },
  props: {
    taskList: Array as PropType<TaskPreviewProps[]>,
  },

  setup() {
    return {
      TaskCriticalLvl,
    };
  },
});
</script>

<style scoped></style>

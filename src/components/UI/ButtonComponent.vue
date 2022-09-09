<template>
  <div>
    <button
      class="btn"
      :class="{ primary: color === 'primary', ghost: color === 'ghost' }"
    >
      {{ color }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ButtonColor } from "@/types/index";

export default defineComponent({
  props: {
    color: {
      type: Object as PropType<ButtonColor>,
      required: true,
    },
  },
});
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;
}

.ghost {
  border: 1px solid var(--black);
  transition: all 0.2s;
}
.ghost:hover {
  background: teal;
  color: #fff;
  border-color: teal;
}

.primary {
  background: teal;
  border: none;
  color: #fff;
}
.primary:hover {
  background: rgb(0, 87, 87);
  border-radius: 25px;
}
</style>

<template>
  <button
    class="btn"
    :class="{
      primary: color === 'primary',
      green: color === 'green',
      red: color === 'red',
      blue: color === 'blue',
    }"
  >
    {{ color }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ButtonColor } from "@/types/index";

export default defineComponent({
  props: {
    color: {
      type: String as PropType<ButtonColor>,
      required: true,
    },
  },
});
</script>

<style scoped>
.btn {
  padding: 7px 14px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid var(--black);
  transition: all 0.2s;
  min-width: 70px;
  font-size: 14px;
}

.green:hover {
  background: var(--green);
  color: #fff;
  border-color: var(--green);
}

.red:hover {
  background: var(--red);
  color: #fff;
  border-color: var(--red);
}

.blue:hover {
  background: var(--blue);
  color: #fff;
  border-color: var(--blue);
}

.primary {
  background: teal;
  border: none;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s;
}
.primary:hover {
  background: rgb(0, 87, 87);
  border-radius: 25px;
}
</style>

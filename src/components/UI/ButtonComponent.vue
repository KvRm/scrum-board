<template>
  <button
    class="btn"
    :class="{
      primary: color === 'primary',
      green: color === 'green',
      red: color === 'red',
      blue: color === 'blue',

      small: size === 'small',
      medium: size === 'medium',
      large: size === 'large',
      extraLarge: size === 'extraLarge',
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export enum ButtonColor {
  primary = "primary",
  green = "green",
  red = "red",
  blue = "blue",
}

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
  extraLarge = "extraLarge",
}

export default defineComponent({
  props: {
    color: {
      type: String as PropType<ButtonColor>,
      required: true,
    },
    size: {
      type: String as PropType<ButtonSize>,
      required: true,
      default: "small",
    },
  },
});
</script>

<style scoped>
.btn {
  padding: 7px 14px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid var(--gray);
  transition: all 0.2s;
  min-width: 90px;
  font-size: 14px;
  background: #fff;
  color: var(--black);
}

.small {
  font-size: 14px;
}
.medium {
  font-size: 16px;
}
.large {
  font-size: 18px;
}
.extraLarge {
  font-size: 20px;
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
  transition: all 0.3s;
}
.primary:hover {
  background: rgb(0, 87, 87);
  border-radius: 25px;
}
</style>

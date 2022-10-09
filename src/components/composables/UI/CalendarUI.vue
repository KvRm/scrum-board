<template>
  <div class="calendar-container">
    <label>{{ title }}</label>
    <input
      type="date"
      @focus="updateDate"
      class="calendar"
      :min="todayDate"
      :max="maxDate"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import moment from "moment";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
  },

  setup() {
    const todayDate = ref<string>(moment().format("YYYY-MM-DD"));
    const maxDate = ref<string>(moment().add(1, "years").format("YYYY-MM-DD"));

    const updateDate = () => {
      todayDate.value = moment().format("YYYY-MM-DD");
      maxDate.value = moment().add(1, "years").format("YYYY-MM-DD");
    };

    return { updateDate, todayDate, maxDate };
  },
});
</script>

<style scoped>
.calendar-container {
  display: inline-grid;
  margin-bottom: 10px;
}

.calendar {
  padding: 5px 10px;
  border: 2px solid var(--gray);
  background: #fff;
  border-radius: 4px;
  min-width: 300px;
  height: 35px;
}

label {
  font-size: 14px;
  padding-left: 2px;
}
</style>

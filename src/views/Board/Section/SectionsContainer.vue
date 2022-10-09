<template>
  <div class="sections-container">
    <SectionComponent :title="'Нерешенные'">
      <template #add-task>
        <span class="add-task" @click="logText">
          <img class="add-task-img" src="@/assets/icons/plus.svg" alt="" />
        </span>
      </template>
    </SectionComponent>
    <SectionComponent :title="'В работе'">
      <template #add-task>
        <span class="add-task" @click="logText">
          <img class="add-task-img" src="@/assets/icons/plus.svg" alt="" />
        </span>
      </template>
    </SectionComponent>
    <SectionComponent :title="'Решенные'">
      <template #add-task>
        <span class="add-task" @click="logText">
          <img class="add-task-img" src="@/assets/icons/plus.svg" alt="" />
        </span>
      </template>
    </SectionComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionComponent from "@/views/Board/Section/SectionComponent.vue";

export default defineComponent({
  components: { SectionComponent },

  setup() {
    function logText() {
      console.log("Нерешенные");
    }
    return { logText };
  },
});
</script>

<style scoped>
.sections-container {
  display: grid;
  overflow-x: scroll;
  gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  min-height: 100vh;
  padding: 0px 10px;
}

.add-task {
  position: relative;
  text-align: center;
  transition: all 0.5s ease;
  cursor: pointer;
}
.add-task-img {
  position: absolute;
  bottom: 0px;
  height: 25px;
  margin-left: 10px;
}
.add-task-img:hover {
  opacity: 0.6;
}
.title {
  display: grid;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
</style>

<template>
  <div class="task">
    <h5 class="title">Имя таски</h5>
    <p class="description">
      ОписаниеОписаниеОписание Оп и с а ни е О п и с а н и е О п и са н и е О п
      и са н и е О пи с а ни е a sd s g f hd d
      fsgdfsfdsgfsdgfsgsfagsfdgfsgsagadsgasg
      ОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание
    </p>
    <div class="additional-info">
      <p class="criticalLvl">Критичнсоть: Высокая</p>
      <p class="timeToComplete">31.10.2022</p>
      <router-link to="task/:id"
        ><span class="task-link">К таске -></span></router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.task {
  display: grid;
  grid-template-rows: auto 1fr auto;
  border: 2px solid var(--gray);
  min-width: 300px;
  max-height: 400px;
  border-radius: 5px;
  background: #fff;
  padding: 0px 8px 8px 8px;
  line-height: 14px;
  font-size: 14px;
}

.title {
  justify-self: center;
  font-size: 20px;
  line-height: 0;
  padding: 0;
}

.description {
  font-weight: 300;
  line-height: 24px;
  overflow-x: scroll;
  padding: 0;
  margin: 0;
}
.task-link {
  color: rgb(0, 76, 255);
}
</style>

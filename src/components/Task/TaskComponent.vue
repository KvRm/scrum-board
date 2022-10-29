<template>
  <div class="task">
    <h2 class="title">Название задачи</h2>
    <div class="state">
      <div class="operating">
        <div class="description">
          <p class="param-header">Описание:</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, cum.
            Rem voluptatem quasi, libero cumque pariatur, deserunt dolores
            doloribus repellendus quae molestias id corporis sit, vel esse unde
            quas ipsum vero? Quae recusandae dolor aspernatur unde nisi
            obcaecati perspiciatis voluptates a quod similique corrupti error,
            eligendi ratione nihil porro culpa sapiente voluptatum tempora
            soluta iste sequi debitis omnis explicabo? Dolorem ipsam asperiores
            sint animi dolore consectetur, voluptatibus voluptas, id dolorum
            suscipit nesciunt eos laudantium odio ad nostrum impedit hic porro
            quae quasi soluta? Commodi quasi neque delectus cumque labore
            reprehenderit reiciendis quidem praesentium nobis ipsam, nostrum
            sint illo accusantium quaerat et atque? Harum totam, illo fuga natus
            sed ratione eos veniam! Dolorem id culpa possimus autem, qui
            molestias fuga vero ipsum, alias maiores ab hic aliquid placeat
            corrupti esse dolore natus laborum vitae, sapiente asperiores unde
            cupiditate nihil deleniti. Odit!
          </p>
        </div>
        <div class="attachments">
          <p class="param-header">Прикреплённые файлы:</p>
        </div>
        <div class="comments">
          <p class="param-header">Комментарии:</p>
          <TaskCommentList />
        </div>
      </div>
      <div class="relations">
        <div class="users">
          <p>Автор:</p>
          <p>Исполнитель:</p>
        </div>
        <div class="info">
          <p>Доска:</p>
          <p>Статус:</p>
          <p>Критичноcть:</p>
          <p>Крайний срок:</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskCommentList from './TaskCommentList.vue'

export default defineComponent({
  components: { TaskCommentList },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.task {
  padding-bottom: 60px;
}

.title {
  text-align: center;
  padding: 10px 0;
}

.state {
  display: grid;
  grid-template-columns: 1fr auto;
  border-top: 1px solid lightgray;
}

.relations {
  width: 340px;
  line-height: 30px;
}

.users {
  padding: 10px 0 10px 10px;
  border-bottom: 1px solid lightgray;
}

.info {
  padding: 10px 0 10px 10px;
}

.operating {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 70vh;
  padding: 10px 10px 0 0;
  border-right: 1px solid lightgray;
}

.description,
.attachments {
  margin-bottom: 40px;
}

.param-header {
  padding-bottom: 8px;
}
</style>

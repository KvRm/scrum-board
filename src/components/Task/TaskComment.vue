<template>
  <div class="comment">
    <p class="author">admin@admin.com</p>
    <p class="text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
      reprehenderit eos placeat, sed accusantium libero nihil ipsa assumenda
      repellat tenetur iusto atque est, dolores ex ea minima, voluptates ipsam
      deserunt doloribus aliquam. Quidem autem molestiae libero eaque itaque
      distinctio illo reiciendis quisquam fuga accusamus? Saepe odit eius
      debitis ratione voluptatem eveniet, possimus ipsum aut? Quidem, sed
      recusandae. Voluptatibus, laudantium fugit?
    </p>
    <div class="footer">
      <span class="answer">Ответить</span>
      <p class="creationDate">29.10.22 в 23:38</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.comment {
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
}

.footer {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  margin-top: 5px;
}

.author {
  padding: 5px 0;
  font-weight: bold;
}

.answer {
  cursor: pointer;
  color: gray;
  font-size: 14px;
}

.answer:hover {
  text-decoration: underline;
}

.creationDate {
  font-size: 14px;
  text-align: right;
  color: gray;
}
</style>

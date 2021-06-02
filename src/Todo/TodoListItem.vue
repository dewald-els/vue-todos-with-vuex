<template>
  <li class="todo-item">
    <span>{{ todo.title }}</span>
    <aside class="todo-item__actions">
      <button :disabled="updating" @click="handleViewDetail">View</button>&nbsp;
      <button v-if="!todo.completed" :disabled="updating" @click="handleTodoComplete">Complete</button>
      <button v-if="todo.completed" :disabled="updating" @click="handleTodoPutBack">Put Back</button>
    </aside>
  </li>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "TodoListItem",
  props: ["todo"],
  data() {
    return {
      updating: false
    }
  },
  methods: {
    ...mapActions(['toggleTodoComplete']),
    handleViewDetail() {
      this.$emit("view-detail", this.todo.id);
    },
    async handleTodoComplete() {
      this.updating = true
      await this.toggleTodoComplete({
        id: this.todo.id,
        completed: true
      })
      this.updating = false
    },
    async handleTodoPutBack() {
      this.updating = true
      await this.toggleTodoComplete({
        id: this.todo.id,
        completed: false
      })
      this.updating = false
    }
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  border-bottom: 1px solid #efefef;
  padding: .25em 0;
}

.todo-item__actions {
  margin-left: auto;
}
</style>

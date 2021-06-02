<template>
  <section id="todo-list">
    <h4>Things todo</h4>

    <TodoListItem
      v-for="todo in incompleteTodos"
      :key="todo.id"
      :todo="todo"
      @view-detail="handeViewDetail"
    />

    <h4>Things i have done</h4>
	<TodoListItem
      v-for="todo in completedTodos"
      :key="todo.id"
      :todo="todo"
      @view-detail="handeViewDetail"
    />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TodoListItem from "./TodoListItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoListItem,
  },
  created() {
    this.fetchTodos();
  },
  computed: {
    ...mapGetters(["completedTodos", "incompleteTodos"]),
  },
  methods: {
    ...mapActions(["fetchTodos"]),
    handeViewDetail(todoId) {
      this.$router.push(`/todos/${todoId}`);
    },
  },
};
</script>

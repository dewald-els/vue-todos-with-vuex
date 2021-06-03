<template>
  <section id="todo-list">
    <header>
      <h4>Things todo</h4>
      <aside class="create-todo-link">
        <router-link role="button" to="/create">Add a todo &plus;</router-link>
      </aside>

    </header>


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

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.create-todo-link a {
  color: white;
  background-color: rgb(10, 132, 255);
  text-decoration: none;
  border: solid 1px rgb(8, 105, 203);;
  padding: .5em;
  border-radius: 5px;
  font-size: .9em;
}
</style>

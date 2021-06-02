<template>
  <main id="todo-detail">
    <h4>Todo Detail</h4>

    <router-link to="/todos">Back</router-link>&nbsp;

    <p v-if="isLoading">Loading todo...</p>
    <section v-else>
      <h4>{{ todo.title }}</h4>
      <p>{{ todo.description }}</p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'TodoDetail',
  created() {
    console.log('Hello?')
    // GET THE ROUTE PARAMETER! - ID of my todo
    const {id} = this.$route.params;
    fetch(`http://localhost:3000/todos/${id}`)
        .then(r => r.json())
        .then(todo => {
          this.todo = todo
        })
        .catch(e => {
          console.error(e.message);
        })
        .finally(() => {
          this.isLoading = false
        })

  },
  data() {
    return {
      isLoading: true,
      todo: null
    }
  }
}
</script>

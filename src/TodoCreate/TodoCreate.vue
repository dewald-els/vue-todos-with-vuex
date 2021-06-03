<template>
  <main class="todo-create">
    <h1>Add a new todo</h1>
    <form @submit.prevent="onCreateSubmit">
      <fieldset>
        <label>Title</label>
        <input type="text" v-model="title" id="title" name="title" placeholder="What do you have to do?"/>
      </fieldset>
      <fieldset>
        <label>Description</label>
        <textarea rows="3" v-model="description" id="description" name="description"
                  placeholder="Some more info"></textarea>
      </fieldset>
      <button>Add</button>

      <p>
        <router-link to="/todos">Cancel</router-link>
      </p>
    </form>
  </main>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'TodoCreate',
  data() {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    ...mapActions(['createTodo']),
    async onCreateSubmit() {
      if (!this.title || !this.description) {
        alert('Please add a title and description')
        return
      }

      await this.createTodo({
        title: this.title,
        description: this.description,
        completed: false
      })

      this.title = ''
      this.description = ''
    }
  }
}
</script>

<style scoped>
input, textarea {
  display: block;
  width: 100%;
  font-size: 1em;
  padding: .5em 1em;
  border-radius: .25em;
  border: 1px solid rgba(188, 188, 191, 0.6);
}
</style>

<template>
  <section>
    <h4>Login to the best todos</h4>
    <form @submit.prevent="handleLoginSubmit">

      <fieldset>
        <input type="text" placeholder="What's your username?" v-model="username"/>
        <button type="submit">Login</button>
      </fieldset>


    </form>
  </section>
</template>

<script>
import {
  mapActions,
  mapState
} from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      username: ''
    }
  },
  computed: {
    ...mapState(['profile'])
  },
  watch: {
    profile(curr) {
      if (curr !== '') {
        this.$router.push('/todos')
      }
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    handleLoginSubmit() {

      if (this.username.length <= 2) {
        alert('Too short!');
        return;
      }

      this.loginUser(this.username)
    }
  }
}
</script>

<style scoped>
fieldset {
  border: none;
  padding: 0;
  display: flex;
}

input {
  width: 100%;
  font-size: 1em;
  padding: .5em 1em;
}
button {
  font-size: 1em;
}

</style>

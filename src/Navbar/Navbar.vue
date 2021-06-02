<template>
  <nav class="nav">
    <ul class="navbar">
      <li class="navbar-item">Another Todos App</li>
    </ul>
    <ul class="navbar right" v-if="profile">

      <li class="navbar-item">
        <router-link to="/todos">Todos</router-link>
      </li>

      <li class="navbar-item">{{ profile }}</li>

      <NavbarLogout/>

      <li class="navbar-item todos-count-badge">{{ numberOfTodos }}</li>

    </ul>
  </nav>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
import NavbarLogout from "@/Navbar/NavbarLogout";

export default {
  name: 'Navbar',
  components: {NavbarLogout},
  computed: {
    ...mapState(['profile']),
    ...mapGetters(['numberOfTodos'])
  }
}
</script>

<style>
.nav {
  display: flex;
  background-color: rgb(10, 132, 255);
  padding: 1em;
  color: white;
}

.navbar {
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  align-items: center;
}

.navbar-item {
  padding: 0 .5em;
}

.navbar-item a {
  color: white;
  text-decoration: none;
}

.navbar.right {
  margin-left: auto;
}

.todos-count-badge {
  background-color: rgb(8, 108, 210);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

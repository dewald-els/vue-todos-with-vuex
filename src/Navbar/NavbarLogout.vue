<template>
  <li class="navbar-item">
    <button @click="handleLogoutClick">Logout</button>
  </li>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'NavbarLogout',
  methods: {
    ...mapActions(['logoutUser']),
    handleLogoutClick() {
      if (!confirm('Are you sure?')) {
        return
      }
      this.logoutUser()
    }
  }
}
</script>

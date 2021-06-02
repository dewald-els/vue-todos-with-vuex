<template>
  <main id="app">
    <Navbar/>
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import Navbar from "./Navbar/Navbar.vue";
import {mapState} from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(['profile'])
  },
  watch: {
    profile(current) {
      if (current === '') {
        this.$router.push('/login')
      }
    }
  },
  beforeCreate() {
    console.log("App.beforeCreate()");
  },
  created() {
    console.log("App.created()");
  },
  mounted() {
    console.log("App.mounted()");
  },
};
</script>

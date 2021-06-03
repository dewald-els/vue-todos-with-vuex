<template>
  <main id="app">
    <Navbar/>
    <div class="container">
      <!--
        Prevent API request being done every time the route changes to TodoList
        The keep-alive caches the TodoList view
        More info here: https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components -->
      <keep-alive :include="cachedComponents">
        <router-view></router-view>
      </keep-alive>
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
  created() {
    console.log("App.created()");
    if (!this.cachedComponents.includes('TodoList')) {
      // Cache the TodoList if it is NOT in the list.
      this.cachedComponents.push('TodoList')
    }
  },
  data() {
    return {
      cachedComponents: []
    }
  },
  computed: {
    ...mapState(['profile'])
  },
  watch: {
    profile(current) {
      if (current === '') {
        this.cachedComponents = [] // Clear the cachedComponents
        this.$router.push('/login')
      }
    }
  },
  beforeCreate() {
    console.log("App.beforeCreate()");
  },
  mounted() {
    console.log("App.mounted()");
  },
};
</script>

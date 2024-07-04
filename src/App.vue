<template>
  <v-app>
    <v-main :style="{ background: backgroundColor }">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'; // Import mapState from Vuex if you are using Vuex for state management


export default {

 
  computed: {
    ...mapState(['isLoggedIn']) // Assuming you have a state property named isLoggedIn to track login status
  },
  data() {
    return {
      backgroundColor: 'url(https://example.com/background.jpg) center center / cover no-repeat' // Example background image URL
    };
  },
  watch: {
    $route(to) {
      // Check if the route is the login page
      if (to.name === 'login') {
        this.showNavbar = false;
        this.showFooter = false;
      } else {
        this.showNavbar = true;
        this.showFooter = true;
      }
    }
  }
};
</script>

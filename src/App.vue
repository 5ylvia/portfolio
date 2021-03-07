<template>
  <v-app>
    <Header />
    <router-view></router-view>
    <Sidebar />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";

@include desktop {
  #app .v-application--wrap {
    flex-direction: row;
  }
  #app {
    // margin-left: 10%;
    width: 100vw;
    height:100vh;
  }
}

</style>

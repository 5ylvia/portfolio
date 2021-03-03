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

#app .v-application--wrap {
  flex-direction: row;
}
#app .v-main {
  margin-left: 10%;
  width: 90%;
}
</style>

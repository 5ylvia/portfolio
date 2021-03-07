<template>
  <v-list class="sidebar hidden-xs-only">
    <div class="sidebar-line"></div>
    <v-list-item href="https://github.com/5ylvia">
      <v-icon color="primary">fab fa-github</v-icon>
    </v-list-item>
    <v-list-item href="https://www.linkedin.com/in/sylvia-lee-130">
      <v-icon color="primary">mdi-linkedin</v-icon>
    </v-list-item>
    <v-list-item href="mailto:sylvi.3311@gmail.com">
      <v-icon color="primary">mdi-email-outline</v-icon>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
.sidebar.v-list {
  position: fixed;
  bottom: 3em;
  right: 32px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  
}
.v-list.sidebar.v-sheet.theme--light {
  background: none;
}
.sidebar-line {
  margin: 0 1em 1em 0;
  height: 20em;
  border-right: 0.1em solid rgba(0, 0, 0, 0.12);
}
</style>
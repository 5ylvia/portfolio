<template>
  <v-navigation-drawer
    permanent
    expand-on-hover
    height="100vh"
    class="nav ml-8 mt-8"
  >
    <router-link :to="{ name: 'home' }">
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-content>
            <img
              style="width: 40px; max-width: 100px"
              src="@/assets/logo.png"
              alt=""
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </router-link>

    <v-list nav dense>
      <v-divider class="mb-4"></v-divider>
      <v-list-item :to="{ name: 'home' }">
        <v-icon>mdi-alpha-w-circle-outline</v-icon>
        <v-list-item-title class="pl-3">HOME</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{ name: 'work' }">
        <v-icon>mdi-alpha-w-circle-outline</v-icon>
        <v-list-item-title class="pl-3">WORK</v-list-item-title>
      </v-list-item>
      <v-list-item :to="{ name: 'about' }">
        <v-icon>mdi-alpha-a-circle-outline</v-icon>
        <v-list-item-title class="pl-3">ABOUT</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.nav.theme--light.v-navigation-drawer:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
.nav .v-navigation-drawer__border {
  width: 0;
}
.nav .theme--light.v-list-item--active:before {
  opacity: 0;
}
.nav .theme--light.v-list-item--active .v-list-item__title,
.nav .theme--light.v-list-item--active .v-icon {
  color: #f5df4d;
}
.nav .v-list--nav .v-list-item,
.v-list-item__title,
.nav .theme--light.v-icon {
  color: #939597;
  padding: 0;
}
.nav.theme--light.v-navigation-drawer .v-divider {
  border-width: 1px;
}
</style>
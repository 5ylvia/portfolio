<template>
  <v-navigation-drawer
    permanent
    expand-on-hover
    fixed
    height="100vh"
    class="nav mx-8"
  >
    <router-link :to="{ name: 'work' }">
      <v-list>
        <v-list-item class="px-2 pt-8">
          <v-list-item-content>
            <img
              style="width: 40px; max-width: 100px"
              src="@/assets/logo.png"
              alt="logo"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </router-link>

    <v-list nav dense>
      <v-divider class="mb-4"></v-divider>
      <v-list-item-group v-model="selectedMenu">
        <v-list-item
          v-for="(menu, i) in menus"
          :key="i"
          :to="{ name: menu.to }"
        >
          <v-list-item-icon>
            <v-icon v-text="menu.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="text-uppercase"
              v-text="menu.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    selectedMenu: 0,
    menus: [
      { to: "work", icon: "W", text:"Works" },
      { to: "about", icon: "A", text:"about me" },
    ],
  }),
};
</script>

<style>
.nav .v-navigation-drawer__border {
  width: 0;
}
.nav .theme--light.v-list-item--active:before {
  opacity: 0;
}
.nav .theme--light.v-list-item--active .v-list-item__title,
.nav .theme--light.v-list-item--active .v-icon {
  color: var(--v-accent-darken1);
}
.nav .v-list--nav .v-list-item,
.v-list-item__title,
.nav .theme--light.v-icon {
  color: var(--v-primary-lighten1);
  padding: 0;
}
.nav.theme--light.v-navigation-drawer .v-divider {
  border-width: 1px;
}
</style>
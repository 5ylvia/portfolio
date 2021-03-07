<template>
  <div>
    <!-- Mobile nav -->
    <v-sheet class="hidden-sm-and-up">
      <v-app-bar class="fill-height" align="center">
          <v-img class="ma-2" max-width="40" contain aspect-ratio="1" :src="require(`@/assets/logo.png`)" alt="logo"></v-img>
          <v-spacer></v-spacer>
          <v-btn text href="https://github.com/5ylvia" class="font-weight-bold" color="primary"><v-icon color="primary">fab fa-github</v-icon></v-btn>
          <v-divider inset vertical></v-divider>
          <v-btn text href="mailto:sylvi.3311@gmail.com" class="font-weight-bold" color="primary"><v-icon color="primary">mdi-email-outline</v-icon></v-btn>
          <v-divider inset vertical></v-divider>
          <v-btn text href="https://www.linkedin.com/in/sylvia-lee-130" class="font-weight-bold" color="primary"><v-icon color="primary">mdi-linkedin</v-icon></v-btn>
      </v-app-bar>
  
      <!-- <v-navigation-drawer
        v-model="nav"
        absolute
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img contain aspect-ratio="1" :src="require(`@/assets/logo.png`)" alt="logo"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>Sylvia Lee</v-list-item-title>

          </v-list-item-content>
          <v-list-item-avatar>
            <v-btn icon @click="nav = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-avatar>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
            v-for="menu in menus"
            :key="menu.title"
            link
          >
            <v-list-item-icon class="mr-0">
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ menu.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> -->
    </v-sheet>

    <!-- Web nav -->
    <v-navigation-drawer
      permanent
      width="70px"
      class="hidden-xs-only">
      <v-list-item class="pl-4">
        <v-img class="mt-12" max-width="40" contain aspect-ratio="1" :src="require(`@/assets/logo.png`)" alt="logo"></v-img>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    // selectedMenu: 0,
    // nav: true,
    // mini:true,
    menus: [
      { to: "work", icon: "W", text:"works" },
      // { to: "about", icon: "A", text:"bout me" },
    ],
  }),
};
</script>

<style>

</style>
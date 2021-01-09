<template>
      <v-navigation-drawer
        permanent
        expand-on-hover
        height="100vh"
        fixed
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-content>
              <img style="width:40px; max-width:100px" src="@/assets/logo.png" alt="">
            </v-list-item-content>
          </v-list-item>
          <!-- <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="require('~@/assets/logo.png')"></v-img>
            </v-list-item-avatar>
          </v-list-item> -->
        </v-list>

        <!-- <v-divider></v-divider> -->

        <v-list
          nav
          dense
        >
          <v-list-item link>
            <v-list-item-title>Work</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shared with me</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Starred</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Header'

}
</script>

<style>

</style>
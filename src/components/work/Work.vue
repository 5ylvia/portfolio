<template>
  <v-main>
    <v-row no-gutters>
      <v-col
        cols="6"
        xs="12"
        v-for="(project, i) in projects"
        :key="i"
        :to="{ name: project.text }"
      >
        <v-hover>
          <template v-slot:default="{ hover }" color="primary">
            <v-card>
              <v-img height="40vh" width="100%" :src="project.src"></v-img>
              <v-card-title v-text="project.title"> </v-card-title>

              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="accent"
                  overlay-opacity="1"
                >
                  <!-- <v-card-text v-text="project.text"> </v-card-text> -->
                  <v-btn color="primary">See more</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  name: "work",
  data: () => ({
    overlay: false,
    projects: [
      {
        src: require("@/assets/logo.png"),
        title: "home",
        text: "ux",
      },
      {
        src: require("@/assets/logo.png"),
        title: "work",
        text: "mdi-alpha-w-circle-outline",
      },
      {
        src: require("@/assets/logo.png"),
        title: "about",
        text: "mdi-alpha-a-circle-outline",
      },
      {
        src: require("@/assets/logo.png"),
        title: "about",
        text: "mdi-alpha-a-circle-outline",
      },
      {
        src: require("@/assets/logo.png"),
        title: "about",
        text: "mdi-alpha-a-circle-outline",
      },
    ],
  }),
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";
</style>
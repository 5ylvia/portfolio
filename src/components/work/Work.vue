<template>
  <v-main>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        width="100%"
        v-for="(project, i) in projects"
        :key="i"
        :to="{ name: project.text }"
      >
        <v-hover>
          <template v-slot:default="{ hover }" color="primary">
            <v-card min-height="500px" height="40vh">
              <v-img height="100%" width="100%" :src="project.src">
                <!-- <v-card-title v-text="project.title"></v-card-title> -->
                <v-icon>{{project.icon}}</v-icon>
                <v-card-text v-text="project.title"></v-card-text>
              </v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="accent"
                  overlay-opacity="1"
                >            
                  <!-- <v-card-text>See more</v-card-text> -->
                  <v-btn large color="primary">See more</v-btn>
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
        src: require("@/assets/Front.jpg"),
        title: "Ōtākaro Orchard",
        icon: "fab fa-wordpress",
      },
      {
        src: require("@/assets/Front.jpg"),
        title: "Digivent",
        icon: "fab fa-vuejs",
      },
    ],
  }),
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";
.v-card__title {
  // position: absolute;
  // width:100%;
  // bottom: 0;
  // opacity: 0.6;
  // background: rgba(255,255,255,0.3);
  // height: 100px;
}
.v-sheet.v-card {
  border-radius: 0;
}

</style>
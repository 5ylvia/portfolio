<template>
  <v-main class="pa-sm-0" width="100%">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        height="100%"
        v-for="(project, i) in projects"
        :key="i"
      >
        <v-hover>
          <template v-slot:default="{ hover }" color="primary">
            <v-card
              class="thumbnail"
              height="50vh"
              @click="selectProject(project)"
            >
              <v-img
                height="100%"
                width="100%"
                :src="require(`@/assets/` + project.images[0])"
              >
                <v-card-text class="card-text"
                  ><v-icon
                    class="pr-4"
                    icon
                    v-for="(icon, i) in project.icons"
                    :key="i"
                    >{{ icon }}</v-icon
                  ></v-card-text
                >
              </v-img>
              <v-fade-transition>
                <v-overlay
                  class="text-center"
                  v-if="hover"
                  absolute
                  color="accent"
                  opacity="1"
                >
                  <v-card-text class="pa-0"
                    >Case study {{ i + 1 }}.</v-card-text
                  >
                  <v-card-title class="pa-0 font-weight-bold black--text"
                    >{{ project.title }}</v-card-title
                  >
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <!-- Modal for selected project -->
    <v-dialog
      scrollable
      hide-overlay
      fullscreen
      transition="dialog-bottom-transition"
      v-model="sheet"
    >
      <v-card tile :project="currentProject">
        <v-card-title>
          <v-btn icon  @click="sheet = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <span class="overline font-weight-light grey--text">- {{ currentProject.title }}</span>
        </v-card-title>
        <v-card-text class="pt-16 px-0 px-sm-4 px-md-16">
          <v-list-item class="mx-8 mx-sm-10 mx-md-16">
              <v-row>
                <v-col cols="12" md="8" width="100%">
                  <v-list-item-content>
                    <v-list-item-subtitle>{{currentProject.date}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-content class="caption">{{currentProject.detail}}</v-list-item-content>
                </v-col>
                <v-col md="auto" width="100%">
                    <v-divider :vertical="$vuetify.breakpoint.mdAndUp"></v-divider>
                </v-col>                
                <v-col cols="12" md="3">
                  <v-list-item-content>
                    <v-list-item-subtitle>Core Technologies</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-row class="ma-0 py-4"> 
                    <v-icon large
                        class="pr-4 pb-4"
                        v-for="(icon, i) in currentProject.icons"
                        :key="i"
                        >{{ icon }}</v-icon>
                  </v-row>
                  <v-row class="ma-0 pb-8" v-if="currentProject.url"> 
                    <v-btn large light color="accent" 
                        :href="currentProject.url"
                        >View site</v-btn>
                  </v-row>
                </v-col>
              </v-row>
          </v-list-item>
          
          <v-list class="mx-8 mx-sm-10 mx-md-16" >
            <v-list-item v-for="(image, i) in currentProject.images" :key="i">
              <v-img class="my-4 my-md-8 my-lg-16" height="100%"
                :src="require(`@/assets/` + image)"
              ></v-img>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <!-- Show other project list -->
          <v-list subheader class="my-16">
            <v-subheader class="overline font-weight-light grey--text">Other Projects</v-subheader>
            <v-list-item>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  v-for="(project, i) in otherProject"
                  :key="i"
                  class="d-flex child-flex"
                >
                  <v-hover>
                    <template v-slot:default="{ hover }" color="primary">
                      <v-card
                        class="thumbnail-card"
                        @click="selectProject(project)"
                      >
                        <v-img
                          :src="require(`@/assets/` + project.images[0])"
                          aspect-ratio="1.6"
                          class="grey lighten-2"
                        >
                            <v-card-text class="card-text pa-4 pb-0 hidden-md-and-up"
                              >Case study {{ i + 1 }}.</v-card-text
                            >
                            <v-card-title class="card-text pt-0 hidden-md-and-up font-weight-bold"
                              >{{ project.title }}</v-card-title
                            >
                          <template v-slot:placeholder>
                            <v-row
                              class="fill-height ma-0"
                              align="center"
                              justify="center"
                            >
                              <v-progress-circular
                                indeterminate
                                color="accent lighten-5"
                              ></v-progress-circular>
                            </v-row>
                          </template>
                        </v-img>
                        <v-fade-transition>
                          <v-overlay
                            class="text-center"
                            v-if="hover"
                            absolute
                            color="accent"
                            opacity="1"
                          >
                            <v-card-text class="pa-0"
                              >Case study {{ i + 1 }}.</v-card-text
                            >
                            <v-card-title class="pa-0 font-weight-bold black--text"
                              >{{ project.title }}</v-card-title
                            >
                          </v-overlay>
                        </v-fade-transition>
                      </v-card>
                    </template>
                  </v-hover>

              
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
export default {
  name: "work",
  data: () => ({
    sheet: false,
    overlay: false,
    currentProject: Object,
    otherProject: Array,
    projects: [
      {
        images: ["o-1.png", "o-2.png", "o-3.png", "o-4.png","o-5.png"],
        title: "Ōtākaro Orchard",
        icons: ["fab fa-wordpress", "fab fa-aws", "fab fa-php", "fab fa-sass"],
        date: "DEC. 2020 | 4 weeks",
        url: "http://13.211.245.29/",
        detail: `Ōtākaro Orchard has a website which is linked to the edible Canterbury site and is very corporate looking.
        They would like for this to be more bicultural and promote the understanding of interconnections between land health, food health and people health.`
      },
      {
        images: ["d-1.png", "d-2.png", "d-3.png", "d-4.png", "d-5.png", "d-6.png"],
        title: "Digivent",
        icons: ["fab fa-vuejs", "fab fa-node", "fab fa-sass", "fas fa-database"],
        date: "OCT. 2020 | 4 weeks",
        detail: `We are tasked to create a Sharing application that is intuitive to use and displays data from an API in an easily understandable representation. The idea is to make it easier for speakers and attendees of events to communicate with each other over the platform. 
        So we are creating Digivent – An interface which allows speakers to create events and attendees to discover them. And for an open question and answer forum. Using a full strategic planning and development process that is managed using agile methodologies we will create a functioning sharing app to be delivered to the client – An Event Management Company.`
      },
      {
        images: ["p-1.png", "p-2.png", "p-4.png", "p-5.gif"],
        title: "WC Penguin Trust",
        icons: ["fab fa-html5", "fab fa-js", "fab fa-sass"],
        date: "MAR. 2020 | 5 weeks",
        url: "https://5ylvia.github.io/penguin/",
        detail: `W.C.P.T would like to redesign their existing site and encourages more people to concern for the blue penguins and others and need people to become involved with volunteers and sponsors to help their work more efficiently.
        The goals of the website are to increase public awareness of their cause, provide a welcoming call to action to join the organisation, and maintain engagement of existing members.`
      },
      {
        images: ["b-1.png", "b-2.png", "b-3.png", "b-4.png", "b-5.png","b-1.gif"],
        title: "Black Estate",
        icons: ["fab fa-html5", "fab fa-js", "fab fa-sass"],
        date: "APR. 2020 | 3 weeks",
        url: "https://5ylvia.github.io/blackestate/",
        detail: `Black Estate Wines are exploring how to get maximum traffic and profits and to make usability and access to information much clearer, from the flow of the website to the business, Based in Waipara, north of Christchurch. 
        With a solid focus on the process of creating wine and delivering top notch informative information to the customer while browsing the website or visiting the building.`
        },
    ],
  }),
  methods: {
    selectProject: function (selectedProject) {
      this.currentProject = selectedProject;
      this.sheet = true;
      const others = this.projects.filter(
        (project) => project.title !== selectedProject.title
      );
      this.otherProject = others;
            console.clear();

      // } else {
      //   this.$parent.$el.scrollTo(0, 0);
      //   this.currentProject = project;
      // }
    },
  },
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";

@include desktop {

}
.thumbnail .v-responsive__content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.card-text {
  display: flex;
  width: auto;
  background: rgba(255, 255, 255, 0.6);
}
.v-sheet.v-card {
  border-radius: 0;
}
</style>
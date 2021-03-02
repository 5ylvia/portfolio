import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from "vue-router";
import vuetify from '@/plugins/vuetify';

Vue.use(VueRouter);


const routes = [
  {
    name: 'work',
    path: "/portfolio/works",
    component: () => import("@/components/work/Work.vue"),
  },
  {
    name: 'about',
    path: "/portfolio/about",
    component: () => import("@/components/about/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,

});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router,
}).$mount('#app')
